---
title: "typst_flutter — Native Typst Compiler for Flutter"
url: "https://portfolio.ajmalbuv.duckdns.org/projects/typst-flutter"
description: "Embed the Typst typesetting compiler natively into Flutter apps via Rust FFI with zero WASM/WebView overhead, sub-100ms compilation, and drop-in widgets."
---

[Back to all projects](/#work)

## Overview & Architecture

typst\_flutter is an open-source Flutter package that natively embeds the Typst document compiler into Flutter applications across Android, iOS, macOS, Windows, and Linux via a high-performance Rust FFI bridge. By avoiding heavy WebViews and WASM interpreters, it compiles complex Typst documents directly on-device in under 100 milliseconds. Engineered with an opaque handle memory architecture, compiled documents remain safely inside Rust memory to guarantee zero race conditions and zero memory leaks. It provides drop-in interactive widgets (TypstDocumentViewer), full Typst query() selector data extraction to structured JSON, bidirectional input passing via sys.inputs, and automated handling for the Typst universe package registry (@preview/\*). Published on pub.dev and backed by comprehensive documentation.

## Key Capabilities

### Native Rust Core & FFI Bridge

Compiles Typst markup natively on-device with Rust FFI, achieving sub-100ms compilation without WebViews, WASM, or external cloud servers.

### Opaque Handle Memory Architecture

Compiled document references remain encapsulated in native Rust memory, guaranteeing thread safety, high throughput, and zero memory leaks.

### Drop-In Document Viewer Widgets

Interactive Flutter widgets (TypstDocumentViewer, TypstView) supporting multi-page rendering, pinch-to-zoom, pan, and reactive re-renders.

### Dynamic Data & Metadata Querying

Extract structured JSON metadata and document hierarchies via Typst selectors with query(), and pass runtime variables using sys.inputs.

### Typst Package Registry Support

Seamless integration with the Typst Universe (@preview/\*) with automatic downloading, tarball decompression, and in-memory caching.

### Automated Multi-Platform Binary Distribution

Turnkey cross-compilation pipeline providing prebuilt native binaries for Android, iOS, macOS, Windows, and Linux via automated setup scripts.