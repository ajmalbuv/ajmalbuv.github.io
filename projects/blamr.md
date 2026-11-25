---
title: "blamr — Fast Concurrent Git Blame CLI & Attribution Engine"
url: "https://portfolio.ajmalbuv.duckdns.org/projects/blamr"
description: "Blazing-fast, zero-dependency concurrent git-blame author attribution and line statistics CLI engine written in modern Rust with in-process Gitoxide repository scanning."
---

[Back to all projects](/#work)

## Overview & Architecture

blamr is a high-performance command-line developer tool and native Git subcommand written in pure Rust (Edition 2024) designed to analyze repository authorship and line attribution at extreme speeds. Built directly on top of Gitoxide (gix), blamr bypasses the git binary and process-forking overhead entirely, reading the object database and index in-process across CPU-core-scaled worker threads. Unlike traditional blame tools that only inspect historical commits, blamr features a real-time diff-overlay engine powered by gix-imara-diff (Histogram algorithm) that attributes dirty working tree changes and uncommitted edits on the fly. With Arc<str> author interning, zero-copy Cow<\[u8\]> line scanning, bounded crossbeam-channel event pipelines, automated lockfile/minified noise exclusion, mailmap canonicalization, and full GNU CLI option compliance (lexopt), blamr delivers production-grade repository intelligence for developers and CI/CD pipelines.

## Key Capabilities

### In-Process Gitoxide (gix) Engine

Directly traverses repository indices, trees, and commit graphs without shelling out to external git processes, eliminating IPC latency.

### Worktree Dirty-Line Diff Overlay

Uses histogram diffing (gix-imara-diff) to map live working tree edits back to original authors while attributing fresh uncommitted lines in real time.

### Multi-Threaded Worker Pipeline

Orchestrates index enumeration with Rayon and dispatches file blame across CPU-core-scaled worker threads over bounded crossbeam channels.

### Extreme Memory Efficiency & Interning

Employs Arc<str> author deduplication and compact 4-byte tracking slots (Vec<Option<u32>>), slashing memory consumption by ~83% on monorepos.

### Automated Noise & Lockfile Pruning

Heuristically detects binary files via 8KB buffer sniffing, skips UTF-16 BOMs and Git LFS pointers, and filters machine-generated lockfiles and minified bundles.

### GNU CLI Flags & Short Option Clustering

Supports standard POSIX/GNU flags (--jobs, --email, -j4, -e, -w), clustered short flags (-acn), mailmap aliasing (.mailmap), and structured JSON export.