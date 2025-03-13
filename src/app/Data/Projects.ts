export const Projects = [
    {
      id: 1,
      img: 'assets/images/projects/images/ecommerce.webp',
      title: 'Full Stack Ecommerce Website',
      description:
        'Developed a full-stack Ecommerce website using Java, Spring Boot, Angular, and MySQL. The site includes JWT-based user authentication, with admin CRUD operations on products, categories, and orders.',
      largeDescription:
        'This project is a complete Ecommerce platform where users can browse products, add them to the cart, and securely make payments. The backend, powered by Java and Spring Boot, implements robust APIs for secure user authentication, product management, and order handling. Admins have the ability to perform CRUD operations on products, categories, and orders, as well as update delivery statuses. The frontend, developed using Angular, ensures a responsive and visually appealing user experience. By leveraging Hibernate for database interaction and JWT for authentication, the platform is secure and scalable. Users can seamlessly navigate the platform, select products, and place orders with ease.',
      techstack: 
        'Java, Hibernate, Spring Boot, MySQL, HTML, CSS, TypeScript, Angular, RESTful API, and JWT.',
      features: [
        {
          heading: 'User Authentication',
          description: 'Implemented secure login and authorization using JSON Web Tokens (JWT) to protect user data and ensure safe access to resources.'
        },
        {
          heading: 'Admin Operations',
          description: 'Admins can perform CRUD operations on products, categories, and orders. They also have the ability to update delivery statuses and manage the overall inventory efficiently.'
        },
        {
          heading: 'Order Management',
          description: 'Users can browse products, add items to a shopping cart, and place orders. Admins can monitor and manage orders effectively, ensuring timely delivery.'
        },
        {
          heading: 'Shopping Cart & Checkout',
          description: 'Users can add multiple products to the cart, update quantities, and proceed to a secure checkout process, including entering payment details.'
        },
        {
          heading: 'Database Management',
          description: 'Used MySQL to handle user, product, and order data efficiently. Integrated Hibernate ORM for seamless interaction with the database.'
        },
        {
          heading: 'Frontend Development',
          description: 'Built a responsive and intuitive user interface using Angular, leveraging HTML, CSS, and TypeScript for a smooth shopping experience on all devices.'
        },
        {
          heading: 'RESTful APIs',
          description: 'Developed efficient APIs to manage seamless communication between the frontend and backend, ensuring reliable and consistent data flow.'
        }
      ],
      screenshots: {
        img1: '/assets/images/projects/screenshots/Ecommerce/1.webp',
        img2: '/assets/images/projects/screenshots/Ecommerce/2.webp',
        img3: '/assets/images/projects/screenshots/Ecommerce/3.webp',
        img4: '/assets/images/projects/screenshots/Ecommerce/4.webp',
        img5: '/assets/images/projects/screenshots/Ecommerce/5.webp',
        img6: '/assets/images/projects/screenshots/Ecommerce/6.webp',
        img7: '/assets/images/projects/screenshots/Ecommerce/7.webp',
        img8: '/assets/images/projects/screenshots/Ecommerce/8.webp',
        img9: '/assets/images/projects/screenshots/Ecommerce/9.webp',
      },
    },  
    {
      id: 2,
      img: 'assets/images/projects/images/portfolio.webp',
      title: 'Full Stack Portfolio Website',
      description: 
        'Designed and developed a full-stack Portfolio Website utilizing Spring Boot for the backend and Angular for the frontend. The application includes an admin login, role-based navigation, and JWT authorization to ensure robust security. Additionally, it features a contact form for direct communication and the ability to download my resume.',
      largeDescription: 
        'The Portfolio Website was designed to provide a professional platform for showcasing my skills, projects, and experiences. Built using a full-stack architecture, it includes Spring Boot for the backend and Angular for the frontend. Features include secure admin login with JWT, role-based navigation, dynamic content management, and a responsive UI. Users can view projects, download my resume, and send messages via an integrated contact form. The application was containerized with Docker and deployed on AWS using EC2 for the backend, RDS for the database, and S3 for the frontend. This project improved my online presence and provided valuable experience in designing full-stack systems using modern technologies.',
      techstack: 
        'Java, Hibernate, Spring Boot, MySQL, HTML, CSS, TypeScript, Angular, RESTful API, JWT, Figma, Docker, AWS.',
      features: [
        {
          heading: 'Responsive Design',
          description: 'The website is designed to adapt seamlessly to different screen sizes, ensuring an optimal user experience on desktops, tablets, and mobile devices.'
        },
        {
          heading: 'Admin Authentication',
          description: 'Secure login and authentication implemented using JSON Web Tokens (JWT) to ensure only authorized users can access the admin panel. Includes role-based navigation for enhanced security.'
        },
        {
          heading: 'Project Management',
          description: 'Admins can dynamically add, edit, and remove projects. Each project can include detailed descriptions, feature lists, and associated screenshots for better presentation.'
        },
        {
          heading: 'Content Management',
          description: 'Admins can manage various portfolio sections such as skills, certifications, education, and experience with full Create, Read, Update, and Delete (CRUD) functionality.'
        },
        {
          heading: 'User Interaction',
          description: 'Users can explore the portfolio to view projects and skills, send direct messages via a contact form integrated with Gmail, and download my CV for offline access.'
        },
        {
          heading: 'Deployment & Scalability',
          description: 'The application is containerized using Docker for easy deployment and scalability. It is hosted on AWS, leveraging EC2 for the backend, RDS for the database, and S3 for serving the frontend.'
        }
      ],
      screenshots: {
        img1: 'assets/images/projects/screenshots/Portfolio/1.webp',
        img2: 'assets/images/projects/screenshots/Portfolio/2.webp',
        img3: 'assets/images/projects/screenshots/Portfolio/3.webp',
        img4: 'assets/images/projects/screenshots/Portfolio/4.webp',
        img5: 'assets/images/projects/screenshots/Portfolio/5.webp',
        img6: 'assets/images/projects/screenshots/Portfolio/6.webp',
        img7: 'assets/images/projects/screenshots/Portfolio/7.webp',
        img8: 'assets/images/projects/screenshots/Portfolio/8.webp',
        img9: 'assets/images/projects/screenshots/Portfolio/9.webp',
      },
    },    
    {
      id: 3,
      img: 'assets/images/projects/images/ems.webp',
      title: 'Full Stack Employee Management System',
      description:
        'Developed a full-stack Employee Management System using Java, Spring Boot, Angular, and MySQL. The backend handles CRUD operations with JPA, while the frontend offers a responsive interface. RESTful APIs manage communication, and Jasper Reports were integrated for exporting employee lists.',
      largeDescription:
        'The Employee Management System is a comprehensive platform for managing employee data, attendance, and payroll. Built using a robust full-stack architecture, it features a backend powered by Java and Spring Boot, with Hibernate for efficient ORM and MySQL for database management. The frontend, developed with Angular, provides a modern and user-friendly interface for managing employee details and tracking attendance. RESTful APIs ensure smooth communication between the frontend and backend, while Jasper Reports allow administrators to generate and download detailed reports of employee data. This project enhances administrative efficiency and provides an organized way to manage employee records.',
      techstack: 
        'Java, Hibernate, Spring Boot, MySQL, HTML, CSS, TypeScript, Angular, RESTful API, JWT, and Jasper Reports.',
      features: [
        {
          heading: 'Employee Records Management',
          description: 'Admins can perform CRUD operations for managing employee details, including personal information, job titles, and salary structures.'
        },
        {
          heading: 'Attendance Tracking',
          description: 'Track employee attendance with integrated tools for recording, reviewing, and managing daily or monthly attendance data.'
        },
        {
          heading: 'Payroll Management',
          description: 'Generate and manage salary records with automatic calculations based on attendance and employee details.'
        },
        {
          heading: 'Report Generation',
          description: 'Integrated Jasper Reports to allow administrators to export detailed employee lists and other reports in formats like PDF or Excel.'
        },
        {
          heading: 'Database Management',
          description: 'Efficient storage and retrieval of employee data using MySQL, with Hibernate ORM ensuring seamless interaction between the application and database.'
        },
        {
          heading: 'Frontend Development',
          description: 'Built a responsive and intuitive interface using Angular, offering easy navigation and a pleasant user experience on all devices.'
        },
        {
          heading: 'RESTful APIs',
          description: 'Smooth and secure communication between the frontend and backend, enabling real-time data synchronization and operations.'
        }
      ],
      screenshots: {
        img1: 'assets/images/projects/screenshots/EMS/1.webp',
        img2: 'assets/images/projects/screenshots/EMS/2.webp',
        img3: 'assets/images/projects/screenshots/EMS/3.webp',
        img4: 'assets/images/projects/screenshots/EMS/4.webp',
        img5: 'assets/images/projects/screenshots/EMS/5.webp',
        img6: 'assets/images/projects/screenshots/EMS/6.webp',
        img7: 'assets/images/projects/screenshots/EMS/7.webp',
        img8: 'assets/images/projects/screenshots/EMS/8.webp',
        img9: 'assets/images/projects/screenshots/EMS/9.webp',
      },
    },    
    {
      id: 4,
      img: 'assets/images/projects/images/lms.webp',
      title: 'Full Stack Library Management System',
      description:
        'Engineered a library management system using Java, Spring Boot, Angular, and MySQL. The system manages CRUD operations for books and customers and maintains borrow records using Hibernate.',
      largeDescription:
        'The Library Management System is a full-stack solution designed to manage books, customer data, and borrowing records effectively. Developed using Java, Spring Boot, and Angular, the backend handles CRUD operations for books and customers with Hibernate ensuring efficient database management. The frontend, built with Angular, provides a responsive and intuitive interface for searching books, issuing or returning them, and viewing borrowing history. RESTful APIs ensure secure and seamless communication between the frontend and backend. The system supports admin functionality for catalog and customer management, making it a comprehensive tool for library operations.',
      techstack: 
        'Java, Hibernate, Spring Boot, MySQL, HTML, CSS, TypeScript, Angular, REST API, and JWT.',
      features: [
        {
          heading: 'Book Management',
          description: 'Admins can perform CRUD operations for books, including adding, editing, deleting, and searching for books in the library catalog.'
        },
        {
          heading: 'Customer Management',
          description: 'Manage customer data with CRUD functionalities, allowing the addition of new customers and updates to existing customer profiles.'
        },
        {
          heading: 'Borrowing Records Management',
          description: 'Integrated Hibernate to track and manage book loans, ensuring accurate records of borrowed and returned books.'
        },
        {
          heading: 'Database Management',
          description: 'Utilized MySQL to store library records securely, with efficient handling of books, customers, and borrow data.'
        },
        {
          heading: 'Frontend Development',
          description: 'Developed a user-friendly interface using Angular, with HTML, CSS, and TypeScript for seamless navigation and interaction.'
        },
        {
          heading: 'RESTful APIs',
          description: 'Implemented REST APIs to facilitate secure and efficient communication between the frontend and backend.'
        }
      ],
      screenshots: {
        img1: 'assets/images/projects/screenshots/LMS/1.webp',
        img2: 'assets/images/projects/screenshots/LMS/2.webp',
        img3: 'assets/images/projects/screenshots/LMS/3.webp',
        img4: 'assets/images/projects/screenshots/LMS/4.webp',
        img5: 'assets/images/projects/screenshots/LMS/5.webp',
        img6: 'assets/images/projects/screenshots/LMS/6.webp',
        img7: 'assets/images/projects/screenshots/LMS/7.webp',
        img8: 'assets/images/projects/screenshots/LMS/8.webp',
        img9: 'assets/images/projects/screenshots/LMS/9.webp',
      },
    },    
    {
      id: 5,
      img: 'assets/images/projects/images/netflix.webp',
      title: 'Netflix Clone - Frontend',
      description:
        'Developed a Netflix-like interface using Angular, with Swiper.js for interactive carousels, OAuth2 for authentication, and RESTful APIs from TMDB for fetching movie data.',
      largeDescription:
        'This Netflix Clone replicates the user interface of the popular streaming platform and integrates advanced functionality using modern technologies. Built with Angular, it leverages Swiper.js for sleek, interactive carousels that enhance the browsing experience. OAuth2 is implemented for secure user authentication. Data is fetched dynamically from The Movie Database (TMDB) using their RESTful APIs, providing up-to-date movie and show information. The application features responsive design, smooth animations, and an intuitive layout optimized for both desktop and mobile devices. Search functionality allows users to explore a wide range of media, with detailed views for each item.',
      techstack: 'HTML, CSS, TypeScript, Angular, Swiper.js, OAuth2, and TMDB RESTful APIs.',
      features: [
        {
          heading: 'Dynamic Movie Data',
          description: 'Fetches real-time movie and show data using TMDB RESTful APIs.'
        },
        {
          heading: 'Interactive Carousels',
          description: 'Utilized Swiper.js to create dynamic and touch-friendly carousels for browsing media.'
        },
        {
          heading: 'OAuth2 Authentication',
          description: 'Secure login and user management using OAuth2 standards.'
        },
        {
          heading: 'Responsive Design',
          description: 'Optimized for seamless viewing across mobile, tablet, and desktop devices.'
        },
        {
          heading: 'Media Details',
          description: 'Displays comprehensive information for movies and shows, including cast and ratings.'
        }
      ],
      screenshots: {
        img1: 'assets/images/projects/screenshots/Netflix/1.webp',
        img2: 'assets/images/projects/screenshots/Netflix/2.webp',
        img3: 'assets/images/projects/screenshots/Netflix/3.webp',
        img4: 'assets/images/projects/screenshots/Netflix/4.webp',
        img5: 'assets/images/projects/screenshots/Netflix/5.webp'
      }
    },    
    {
      id: 6,
      img: 'assets/images/projects/images/nike.webp',
      title: 'Nike Clone - Frontend',
      description:
        'Created a Nike e-commerce clone front end with Angular, focusing on responsive design and smooth UI interactions.',
      largeDescription:
        'This Nike Clone is an e-commerce frontend project designed to replicate the aesthetics and functionality of the original Nike website. Developed with Angular, the project offers features such as dynamic filtering, interactive product galleries, and detailed product pages. A focus on responsive design ensures an optimal shopping experience across devices. Smooth animations and modern layouts enhance visual appeal, while intuitive navigation simplifies product browsing and purchasing.',
      techstack: 'HTML, CSS, TypeScript, and Angular.',
      features: [
        {
          heading: 'Responsive Design',
          description: 'Ensures an optimal user experience on mobile, tablet, and desktop devices.'
        },
        {
          heading: 'Interactive Galleries',
          description: 'Custom-built product galleries with smooth transitions and animations.'
        },
        {
          heading: 'Product Details',
          description: 'Displays detailed information, including descriptions, images, and pricing.'
        }
      ],
      screenshots: {
        img1: 'assets/images/projects/screenshots/Nike/1.webp',
        img2: 'assets/images/projects/screenshots/Nike/2.webp',
        img3: 'assets/images/projects/screenshots/Nike/3.webp',
        img4: 'assets/images/projects/screenshots/Nike/4.webp',
        img5: 'assets/images/projects/screenshots/Nike/5.webp',
        img6: 'assets/images/projects/screenshots/Nike/6.webp',
        img7: 'assets/images/projects/screenshots/Nike/7.webp'
      }
    },    
    {
      id: 7,
      img: 'assets/images/projects/images/bank.webp',
      title: 'Full Stack Banking Application',
      description:
        'Built a banking system to manage user accounts, transactions, and fund transfers using Java Swing, Maven, JDBC, and MySQL.',
      largeDescription:
        'This banking application is a comprehensive solution for managing user accounts, fund transfers, and transactions. The backend was built using Java Swing for the graphical user interface, Maven for dependency management, and JDBC for database connectivity to MySQL. Users can manage accounts, perform secure fund transfers, and generate detailed transaction histories. The application incorporates role-based access control for admins and users. With its responsive design and desktop compatibility, this project demonstrates a robust and user-friendly banking system.',
      techstack: 'Java, Java Swing, Maven, JDBC, MySQL, and JDBC Transactions.',
      features: [
        {
          heading: 'Account Management',
          description: 'View, create, and update account details, including balances and user information.'
        },
        {
          heading: 'Fund Transfers',
          description: 'Secure fund transfers with real-time balance updates through JDBC transactions.'
        },
        {
          heading: 'Transaction Reports',
          description: 'Generate detailed transaction histories with specific dates, type and amount.'
        },
        {
          heading: 'Desktop Application',
          description: 'User-friendly desktop application built using Java Swing.'
        }
      ],
      screenshots: {
        img1: 'assets/images/projects/screenshots/BankApp/1.webp',
        img2: 'assets/images/projects/screenshots/BankApp/2.webp',
        img3: 'assets/images/projects/screenshots/BankApp/3.webp',
        img4: 'assets/images/projects/screenshots/BankApp/4.webp',
        img5: 'assets/images/projects/screenshots/BankApp/5.webp',
        img6: 'assets/images/projects/screenshots/BankApp/6.webp',
        img7: 'assets/images/projects/screenshots/BankApp/7.webp',
        img8: 'assets/images/projects/screenshots/BankApp/8.webp',
        img9: 'assets/images/projects/screenshots/BankApp/9.webp'
      }
    },
    {
      id: 8,
      img: "assets/images/projects/images/wildfire_detection.webp",
      title: "Wildfire Detection System",
      description: "Developed a real-time Wildfire Detection System using Python, YOLO, OpenCV, and an alarm system that sends real-time email alerts to fire stations with location, images, and fastest route.",
      largeDescription: 
        "This project is a comprehensive Wildfire Detection System designed to detect wildfires in real-time using surveillance data from cameras or sensors. The system uses YOLO (You Only Look Once) for object detection, specifically targeting fire-related features such as smoke and flames. OpenCV is used for image processing, enhancing detection accuracy. Additionally, the system incorporates an alarm feature that sends real-time email alerts to fire stations, including images of the detected fire, its location, and severity. A route planning module based on Geographic Information Systems (GIS) calculates the safest and fastest emergency route between the fire and the nearest fire station, taking into account real-time fire zones and terrain analysis.",
      techstack: 
        "Python, OpenCV, YOLO, Machine Learning, Email Notification System, Geographic Information System (GIS).",
      features: [
        {
          heading: "Wildfire Detection",
          description: "Leveraged YOLO for real-time wildfire detection in images captured by cameras or sensors, identifying fire-related features such as smoke and flames."
        },
        {
          heading: "Real-Time Alerts",
          description: "Implemented an alarm system that sends immediate email notifications to fire stations with images and location details of the detected wildfire."
        },
        {
          heading: "Image Processing",
          description: "Used OpenCV to process images from surveillance data, detecting wildfire indicators and enhancing image quality for better detection accuracy."
        },
        {
          heading: "Route Planning",
          description: "Integrated a GIS-based approach to compute and provide the safest and fastest emergency route from the fire location to the nearest fire station, considering real-time spatial data, fire zones, and terrain conditions."
        },
        {
          heading: "Data Collection",
          description: "Processes real-time data from cameras or sensors, enabling the system to detect wildfires in various environments and weather conditions."
        },
        {
          heading: "Scalability and Accuracy",
          description: "Designed the system to scale with additional cameras or sensors, optimizing the detection algorithm for higher accuracy across diverse environments."
        }
      ],
      screenshots: {
        img1: "/assets/images/projects/screenshots/WildfireDetection/1.webp",
        img2: "/assets/images/projects/screenshots/WildfireDetection/2.webp",
        img3: "/assets/images/projects/screenshots/WildfireDetection/3.webp",
        img4: "/assets/images/projects/screenshots/WildfireDetection/4.webp"
      }
    }            
  ];
  
