export const FUNCTIONAL_REQUIREMENT_IMG_URL =
  "https://enkonix.com/api/media/Project-Management-Life-Cycle_twJDtCc_x2_webp.webp";
export const NON_FUNCTIONAL_REQUIREMENT_IMG_URL =
  "https://azoft.com/wp-content/uploads/2021/07/Basic-non-functional-requirements.jpg";

export const DONE_IMG_URL =
  "https://cdn-icons-png.flaticon.com/512/9068/9068678.png";

export const UNDONE_IMG_URL =
  "https://cdn-icons-png.flaticon.com/512/6459/6459980.png";

export const NAV_ITEMS = [
  { path: "/", link: "HOME" },
  { path: "/requirement-analysis", link: "REQUIREMENT ANALYSIS" },
  { path: "/documentation", link: "DOCUMENTATION" },
  { path: "/cocomo-model", link: "COCOMO MODEL" },
  { path: "/functional-point-estimation", link: "FUNCTIONAL POINT ESTIMATION" },
  { path: "/rmmm-plan", link: "RMMM PLAN" },
  { path: "/timeline-chart", link: "TIME LINE CHART - PERT / CPM" },
  { path: "/er-dfd-cfd", link: "ER, DFD, CFD" },
  { path: "/test-cases", link: "TEST CASES - REQUIREMENTS AND DESIGN" },
];

export const TEXT_BOOKS = [
  {
    title: "A Concise Introduction to Software Engineering",
    author: "Pankaj Jalote",
    publisher: "Springer International Edition",
    img_url: "https://m.media-amazon.com/images/I/61JxZEEh0YL._SY425_.jpg",
  },
  {
    title: "Software Engineering, A Precise Approach",
    author: "Pankaj Jalote",
    publisher: "Wiley, 2010",
    img_url:
      "https://m.media-amazon.com/images/I/51JvV5iHfYL._SX342_SY445_.jpg",
  },
  {
    title: "Software Engineering,  7/e & 3/e",
    author: "Roger S. Pressman",
    publisher: "TMH",
    img_url:
      "https://usedbooksonline.in/image/cache/catalog/9789339212087-550x550h.jpg",
  },
  {
    title: "Fundamentals of Software Engineering",
    author: "Rajib Mall",
    publisher: "PHI, 2/e",
    img_url: "https://m.media-amazon.com/images/I/71y0gZ1LR0L._SY425_.jpg",
  },
];

export const NON_FUNCTIONAL_REQUIREMENT_DATA = [
  {
    title: "Performance",
    image:
      "https://cdn.prod.website-files.com/5eb9845c0972c01cdaec8415/61b833f2d85b320540e81a9d_webpage-performance.jpeg", // Add relevant image URL
    requirements: [
      "The website should load in under 3 seconds for 95% of users.",
      "The database should handle 10,000 transactions per minute.",
    ],
  },
  {
    title: "Security",
    image:
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/CybersecurityMistakes_Hero-1.width-1300.jpg", // Add relevant image URL
    requirements: [
      "Data should be encrypted using AES-256 encryption.",
      "Users must reset their passwords every 90 days.",
    ],
  },
  {
    title: "Scalability",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZKn5drfo7RYLt-abdQjT_SEMD--zIMVHj2w&s", // Add relevant image URL
    requirements: [
      "The system should support 1 million concurrent users during peak hours.",
    ],
  },
  {
    title: "Availability",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aqd7jaf_8IQiuZui0U7ir77vRKYLlBpiWw&s", // Add relevant image URL
    requirements: ["The system should have 99.99% uptime."],
  },
];

export const FUNCTIONAL_REQUIREMENT_DATA = [
  {
    title: "Login System",
    image:
      "https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37376.jpg", // Add your image URL here
    requirements: [
      "Users can log in using their username and password.",
      "System should lock an account after 5 failed login attempts.",
    ],
  },
  {
    title: "iLearn: A Digital Learning Environment",
    image: "https://www.netsolutions.com/insights/wp-content/uploads/2021/05/Business-requirements-vs-functional-requirements.png",
    requirements: [
      "Students can enroll in courses, track progress, and participate in assessments.",
      "Interactive learning modules with quizzes and assignments.",
      "Instructors can upload course materials, create assignments, and monitor student progress.",
      "Integration with third-party tools for video conferencing and live classes.",
    ],
  },
  {
    title: "Mentcare: A Mental Health Support System",
    image: "https://etimg.etb2bimg.com/photo/105395878.cms",
    requirements: [
      "Users can schedule and attend therapy sessions via video calls.",
      "Mental health assessment tools to track emotional well-being.",
      "Secure messaging platform for communication between patients and therapists.",
      "Access to mental health resources, such as articles, videos, and audio therapy exercises.",
    ],
  },
  {
    title: "A Personal Insulin Pump",
    image: "https://pedagogyeducation.com/getmedia/c6952c16-b411-467a-818a-811f25e701ff/AdobeStock_39695029.jpg.aspx",
    requirements: [
      "User can input blood sugar levels to automatically calculate insulin dosage.",
      "Wireless communication between insulin pump and mobile app for remote monitoring.",
      "Real-time tracking of insulin dosage, blood sugar levels, and health metrics.",
      "Emergency alerts for users when blood sugar levels reach critical thresholds.",
    ],
  },
  {
    title: "A Wilderness Weather Station",
    image: "https://kotaielectronics.com/wp-content/uploads/2024/06/StormLink-Quick-Deploy-Early-Warning-System-600px.jpeg",
    requirements: [
      "Station collects data such as temperature, humidity, wind speed, and air pressure.",
      "Data is transmitted in real-time to a central monitoring system or mobile app.",
      "Battery-operated system with solar power support for extended outdoor use.",
      "System should be able to alert users about extreme weather conditions, such as storms or heatwaves.",
    ],
  },
  {
    title: "Airbus 340 Flight Control System",
    image: "https://www.lufthansa-aviation-training.com/documents/10605707/10607061/FFS_FT63_Mu%CC%88nchen_A340_600.jpg/18774ee0-6d79-a097-1ef7-290a6818ecf4?t=1582302287000",
    requirements: [
      "The system controls flight parameters such as altitude, speed, and direction.",
      "Automatic flight stabilization during turbulence or other adverse conditions.",
      "Backup systems in place to ensure control in case of system failure.",
      "Real-time monitoring of engine performance and fuel consumption.",
    ],
  },
  {
    title: "E-commerce Website",
    image:
      "https://cdn.prod.website-files.com/5f1840665928895a221fb731/652ed7c952b46666bfa996d6_zutZmVT1Zz6His6eLaJkp3Es14LcHmB3Mqb6N7QyvU3OkPS8vSGwFgYWbxb2lkR-a64xRjdw20UN0kGNB-DFdyXtLMkJ-0zQ_yKS5DhnEOtpe9lQxb0IvBeLgleFV1tov8Dv5J1NWw6C-Mmvyz86wEA.png",
    requirements: [
      "Add items to the cart.",
      "Process payments via credit card or UPI.",
      "Track order shipment and delivery status.",
    ],
  },
  {
    title: "Banking Application",
    image:
      "https://static.vecteezy.com/system/resources/previews/036/324/551/non_2x/people-send-and-receive-money-through-mobile-app-electronic-wallet-mobile-bank-transaction-secure-money-transfer-gateway-flat-illustration-template-digital-banking-mobile-app-vector.jpg", // Add your image URL here
    requirements: [
      "Perform fund transfers between accounts.",
      "Generate monthly account statements.",
      "Notify users for low balance or failed transactions.",
    ],
  },
];

export const REFRENCE_BOOKS = [
  {
    title: "Software Engineering, 8/e",
    author: "Sommerville",
    publisher: "Pearson",
    img_url: "https://m.media-amazon.com/images/I/41wunNh3VQL._SY425_.jpg",
  },
  {
    title: "Software Engineering Principles and Practice",
    author: "W S Jawadekar",
    publisher: "TMH, 7/e",
    img_url: "https://m.media-amazon.com/images/I/21dEBjiW3LL.jpg",
  },
  {
    title: "Software Engineering Concepts",
    author: "R Fairley",
    publisher: "TMH, 1997",
    img_url: "https://m.media-amazon.com/images/I/91c37BccN6L._SY425_.jpg",
  },
];

export const CASE_STUDIES_TITLE = [
  "Online Shopping System",
  "Library Management System",
  "Student Information System",
  "Hospital Management System",
  "Banking System",
  "Inventory Management System",
  "Social Media Mobile App",
  "Food Delivery Application",
  "Human Resource Management System (HRMS)",
  "Online Examination System",
  "E-Voting System",
  "Fleet Management System",
  "Real-Time Weather Monitoring System",
  "Customer Relationship Management (CRM) System",
  "Virtual Classroom Platform",
  "Travel Booking System",
  "IoT-Based Smart Home Automation",
  "Event Management System",
  "Online Job Portal",
  "iLearn: A Digital Learning Environment",
  "Mentcare: A Mental Health Support System",
  "A Personal Insulin Pump",
  "A Wilderness Weather Station",
  "Airbus 340 Flight Control System",
];

export const CASE_STUDY_DETAILS = [
  {
    title: "Online Shopping System",
    description:
      "An online shopping system where users can browse products, add them to their cart, and make payments using various methods like credit cards, UPI, and wallets.",
    components: [
      {
        name: "User Authentication",
        details: "Allows users to sign up, log in, and manage their profiles.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Product Catalog",
        details:
          "Displays products, product categories, and search functionality.",
        technologies: ["ReactJS", "REST API", "MongoDB"],
      },
      {
        name: "Shopping Cart",
        details:
          "Users can add and remove products, adjust quantities, and proceed to checkout.",
        technologies: ["ReactJS", "Redux", "Node.js"],
      },
      {
        name: "Payment Gateway",
        details:
          "Integrates with payment systems for processing credit card and UPI transactions.",
        technologies: ["Stripe API", "Node.js"],
      },
      {
        name: "Order Management",
        details:
          "Tracks orders, payment statuses, and user notifications for shipment.",
        technologies: ["Node.js", "MongoDB"],
      },
    ],
    image: "https://example.com/online-shopping-image.jpg",
  },
  {
    title: "Library Management System",
    description:
      "A system for managing a library's resources, including book management, user registration, and the issuance and return of books.",
    components: [
      {
        name: "User Authentication",
        details:
          "Allows users to register, log in, and manage their personal information.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Book Catalog",
        details:
          "Displays a list of books available in the library, including search and filter functionalities.",
        technologies: ["ReactJS", "REST API", "MongoDB"],
      },
      {
        name: "Book Issue & Return",
        details:
          "Manages book issuance and returns, keeping track of due dates and overdue books.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Reservation System",
        details:
          "Allows users to reserve books that are currently unavailable.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Admin Dashboard",
        details:
          "Allows librarians to manage users, books, reservations, and track book status.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
    ],
    image: "https://example.com/library-management-image.jpg",
  },
  {
    title: "Student Information System",
    description:
      "A comprehensive system to manage student records, including personal details, academic performance, course enrollment, and communication between students and faculty.",
    components: [
      {
        name: "Student Registration",
        details:
          "Allows students to register for courses, update personal information, and track their academic progress.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Course Management",
        details:
          "Provides functionality for students to view available courses, their schedules, and instructors, and enroll in courses.",
        technologies: ["ReactJS", "REST API", "MongoDB"],
      },
      {
        name: "Grade Management",
        details:
          "Allows faculty to enter grades and for students to view their grades and academic history.",
        technologies: ["Node.js", "Express", "MongoDB"],
      },
      {
        name: "Attendance System",
        details:
          "Tracks student attendance, provides notifications for absences, and generates reports for faculty and administration.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Communication Portal",
        details:
          "Facilitates communication between students and faculty, enabling messaging, notifications, and announcements.",
        technologies: ["ReactJS", "Node.js", "Socket.io"],
      },
    ],
    image: "https://example.com/student-information-system-image.jpg",
  },
  {
    title: "Hospital Management System",
    description:
      "A comprehensive system for managing hospital operations, including patient records, appointment scheduling, billing, and medical inventory management.",
    components: [
      {
        name: "Patient Registration",
        details:
          "Enables the registration of new patients, maintaining their personal details, medical history, and insurance information.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Appointment Scheduling",
        details:
          "Allows patients to book appointments with doctors, view available slots, and receive reminders for upcoming appointments.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Medical Records Management",
        details:
          "Stores and manages patient medical records, including test results, diagnoses, prescriptions, and treatment histories.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Billing and Payments",
        details:
          "Manages patient billing, including charges for consultations, treatments, tests, and provides multiple payment options.",
        technologies: ["ReactJS", "Node.js", "Stripe API"],
      },
      {
        name: "Inventory Management",
        details:
          "Tracks the medical supplies and equipment used in the hospital, monitors stock levels, and places orders for restocking.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Doctor and Staff Management",
        details:
          "Manages doctor and hospital staff information, schedules, and performance data.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
    ],
    image: "https://example.com/hospital-management-system-image.jpg",
  },
  {
    title: "Banking System",
    description:
      "A banking system that allows users to perform various banking operations like account management, funds transfer, transaction history, and loan applications.",
    components: [
      {
        name: "Account Management",
        details:
          "Enables users to create and manage accounts, update personal details, and view account balances and transaction history.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Funds Transfer",
        details:
          "Allows users to transfer money between accounts, both within the bank and to external accounts using secure payment gateways.",
        technologies: ["ReactJS", "Node.js", "REST API"],
      },
      {
        name: "Transaction History",
        details:
          "Displays detailed records of past transactions including deposits, withdrawals, transfers, and payments.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Loan Management",
        details:
          "Manages loan applications, including personal loans, home loans, and business loans, and allows users to track loan status and payments.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "ATM Integration",
        details:
          "Integrates the system with ATM machines to allow users to check balances, withdraw cash, and perform other banking transactions remotely.",
        technologies: ["Node.js", "Java", "TCP/IP"],
      },
      {
        name: "Customer Support",
        details:
          "Provides customer support through a ticketing system, live chat, and FAQs, allowing users to resolve issues and ask for assistance.",
        technologies: ["ReactJS", "Node.js", "WebSockets"],
      },
    ],
    image: "https://example.com/banking-system-image.jpg",
  },
  {
    title: "Inventory Management System",
    description:
      "An inventory management system that helps businesses keep track of their inventory, manage stock levels, monitor sales, and order products efficiently.",
    components: [
      {
        name: "Product Catalog",
        details:
          "Allows businesses to list, categorize, and manage all products in the system. It includes descriptions, prices, and SKU (Stock Keeping Unit) codes.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Stock Tracking",
        details:
          "Tracks the quantities of products in stock, including automatic updates when stock levels change due to purchases, sales, or returns.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Sales Monitoring",
        details:
          "Monitors the sales of products, generating reports on sales trends, revenue, and popular products, helping businesses make informed decisions.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Order Management",
        details:
          "Facilitates order creation, modification, and processing. It also manages the movement of stock when orders are placed and when shipments are dispatched.",
        technologies: ["ReactJS", "Node.js", "REST API"],
      },
      {
        name: "Supplier Management",
        details:
          "Manages the suppliers from whom products are purchased, allowing businesses to track supplier details, pricing, lead times, and performance.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Reporting & Analytics",
        details:
          "Generates detailed reports and dashboards that offer insights into stock levels, sales performance, and overall business health.",
        technologies: ["ReactJS", "Node.js", "Chart.js", "MongoDB"],
      },
    ],
    image: "https://example.com/inventory-management-system-image.jpg",
  },
  {
    title: "Social Media Mobile App",
    description:
      "A social media mobile application where users can connect with others, share posts, like, comment, and interact with multimedia content in real-time.",
    components: [
      {
        name: "User Authentication",
        details:
          "Allows users to create accounts, log in, and manage their profiles with features like password recovery and multi-factor authentication for enhanced security.",
        technologies: ["React Native", "Firebase Authentication", "Node.js"],
      },
      {
        name: "User Profile Management",
        details:
          "Enables users to manage their personal information, profile picture, bio, and privacy settings. Users can also follow and unfollow other users.",
        technologies: ["React Native", "MongoDB", "Node.js"],
      },
      {
        name: "Post Creation and Sharing",
        details:
          "Users can create and share text posts, images, videos, and links. They can add captions, hashtags, and geolocation information to their posts.",
        technologies: ["React Native", "Firebase", "Node.js"],
      },
      {
        name: "News Feed",
        details:
          "Displays a real-time feed of posts from friends, followers, and suggested content. Users can scroll through, like, comment, and share posts.",
        technologies: ["React Native", "Node.js", "MongoDB"],
      },
      {
        name: "Notifications",
        details:
          "Users receive real-time notifications about likes, comments, new followers, and other important events, ensuring they are engaged with the app.",
        technologies: ["Firebase Cloud Messaging", "React Native"],
      },
      {
        name: "Direct Messaging",
        details:
          "Users can send private messages to their friends or followers, allowing them to share content or communicate one-on-one.",
        technologies: ["React Native", "WebSockets", "Node.js"],
      },
      {
        name: "Search and Discovery",
        details:
          "A search feature that allows users to discover new content, find other users, and explore trending hashtags, topics, and posts.",
        technologies: ["React Native", "Elasticsearch", "Node.js"],
      },
      {
        name: "Content Moderation",
        details:
          "Ensures the app remains a safe environment by filtering inappropriate content and reports. Automated moderation tools and manual reporting systems are integrated.",
        technologies: ["Machine Learning", "Node.js", "Firebase"],
      },
    ],
    image: "https://example.com/social-media-app-image.jpg",
  },
  {
    title: "Food Delivery Application",
    description:
      "A mobile and web application for ordering food from local restaurants, with features like real-time tracking, menu browsing, payment processing, and delivery management.",
    components: [
      {
        name: "User Authentication",
        details:
          "Allows users to create accounts, log in, and manage their personal information. Features include password recovery, email verification, and social media logins.",
        technologies: ["React Native", "Firebase Authentication", "Node.js"],
      },
      {
        name: "Restaurant Listings",
        details:
          "Displays available restaurants with detailed menus, reviews, and ratings. Users can filter restaurants based on cuisine, location, or price range.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Menu and Order Management",
        details:
          "Users can browse restaurant menus, add items to their cart, modify orders, and checkout. Includes customization options for each item (e.g., size, ingredients).",
        technologies: ["React Native", "Node.js", "MongoDB"],
      },
      {
        name: "Real-Time Order Tracking",
        details:
          "Provides real-time tracking of the order status, from preparation to delivery, showing updates on the map and estimated delivery time.",
        technologies: [
          "React Native",
          "Socket.io",
          "Google Maps API",
          "Node.js",
        ],
      },
      {
        name: "Payment Gateway",
        details:
          "Integrates with payment systems for credit card, UPI, wallet, and cash on delivery options. Ensures secure transactions with encryption and third-party integrations.",
        technologies: ["Stripe API", "Razorpay API", "Node.js"],
      },
      {
        name: "Push Notifications",
        details:
          "Sends notifications to users about order updates, restaurant promotions, delivery status, and more, using push notification services.",
        technologies: ["Firebase Cloud Messaging", "React Native"],
      },
      {
        name: "Delivery Management",
        details:
          "Manages delivery routes, driver assignments, and dispatching. Ensures timely delivery by optimizing routes and updating delivery statuses.",
        technologies: ["Google Maps API", "Node.js", "MongoDB"],
      },
      {
        name: "Ratings and Reviews",
        details:
          "Allows users to rate and review restaurants, dishes, and delivery services. Reviews are displayed on restaurant profiles, helping others make informed decisions.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Admin Dashboard",
        details:
          "Provides restaurant managers with a dashboard to view orders, manage menu items, update prices, and track customer feedback and ratings.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
    ],
    image: "https://example.com/food-delivery-app-image.jpg",
  },
  {
    title: "Human Resource Management System (HRMS)",
    description:
      "A comprehensive system for managing employee information, payroll, attendance, leave, performance, and recruitment processes.",
    components: [
      {
        name: "Employee Management",
        details:
          "Handles personal details, employment history, department, position, and other employee records.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Payroll System",
        details:
          "Manages employee salaries, bonuses, deductions, taxes, and generates pay slips.",
        technologies: ["ReactJS", "Node.js", "Stripe API"],
      },
      {
        name: "Leave Management",
        details:
          "Allows employees to request leave and tracks leave balances. HR can approve or deny leave requests.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Performance Appraisal",
        details:
          "Tracks employee performance, assigns goals, evaluates performance, and provides feedback.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Recruitment Management",
        details:
          "Manages job postings, applicant tracking, interview scheduling, and candidate evaluation.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
    ],
    image: "https://example.com/hrms-image.jpg",
  },
  {
    title: "Online Examination System",
    description:
      "A platform for conducting online exams, including features for question paper generation, timed exams, grading, and results.",
    components: [
      {
        name: "User Authentication",
        details:
          "Manages user registration, login, and profile management for students and administrators.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Question Paper Management",
        details:
          "Allows administrators to create, edit, and manage question papers with various question types.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Examination Interface",
        details:
          "Provides a timed examination interface where students can attempt questions and submit answers.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Grading System",
        details:
          "Automatically grades objective questions and sends feedback on answers. Admins can also manually grade subjective answers.",
        technologies: ["ReactJS", "Node.js"],
      },
      {
        name: "Results Management",
        details:
          "Generates and displays exam results for students and allows admins to track performance.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
    ],
    image: "https://example.com/online-exam-image.jpg",
  },
  {
    title: "E-Voting System",
    description:
      "An online platform for secure voting in elections, ensuring voter authentication, secrecy, and real-time result tabulation.",
    components: [
      {
        name: "Voter Authentication",
        details:
          "Ensures that voters are valid and can securely authenticate using OTPs or biometric data.",
        technologies: ["ReactJS", "Node.js", "OAuth"],
      },
      {
        name: "Voting Interface",
        details:
          "Provides a user-friendly interface for voters to select candidates and cast their votes securely.",
        technologies: ["ReactJS", "Node.js"],
      },
      {
        name: "Vote Encryption",
        details:
          "Encrypts votes to ensure privacy and integrity, ensuring they cannot be altered once cast.",
        technologies: ["AES Encryption", "Node.js"],
      },
      {
        name: "Real-Time Result Tabulation",
        details:
          "Votes are automatically tallied and results are updated in real time.",
        technologies: ["ReactJS", "Node.js"],
      },
      {
        name: "Admin Dashboard",
        details:
          "Allows administrators to monitor the voting process, manage elections, and generate reports.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
    ],
    image: "https://example.com/e-voting-image.jpg",
  },
  {
    title: "Fleet Management System",
    description:
      "A platform for managing the fleet of vehicles, tracking their location, fuel consumption, maintenance, and scheduling.",
    components: [
      {
        name: "Vehicle Tracking",
        details:
          "Tracks vehicle locations in real-time using GPS and displays them on an interactive map.",
        technologies: ["ReactJS", "Node.js", "Google Maps API"],
      },
      {
        name: "Maintenance Management",
        details:
          "Tracks and schedules routine maintenance, repairs, and inspections for each vehicle.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Fuel Management",
        details:
          "Monitors fuel consumption, refueling, and costs to optimize fuel efficiency.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Driver Management",
        details:
          "Manages driver schedules, performance, and logs, ensuring compliance with driving regulations.",
        technologies: ["ReactJS", "Node.js"],
      },
      {
        name: "Route Optimization",
        details:
          "Optimizes routes for delivery or transportation, reducing travel time and costs.",
        technologies: ["Google Maps API", "Node.js"],
      },
    ],
    image: "https://example.com/fleet-management-image.jpg",
  },
  {
    title: "Real-Time Weather Monitoring System",
    description:
      "A system for monitoring and displaying real-time weather data such as temperature, humidity, and forecasts.",
    components: [
      {
        name: "Weather Data Collection",
        details:
          "Collects weather data from multiple sensors or third-party APIs like OpenWeather or AccuWeather.",
        technologies: ["ReactJS", "Node.js", "REST API"],
      },
      {
        name: "Data Visualization",
        details:
          "Displays collected weather data in graphs and charts for easy analysis.",
        technologies: ["ReactJS", "D3.js", "Node.js"],
      },
      {
        name: "Real-Time Alerts",
        details:
          "Sends weather-related alerts to users based on predefined criteria (e.g., extreme temperatures or storms).",
        technologies: ["Firebase", "ReactJS"],
      },
      {
        name: "Forecasting System",
        details:
          "Provides weather predictions based on historical data and advanced forecasting algorithms.",
        technologies: ["Node.js", "Machine Learning", "Python"],
      },
      {
        name: "Admin Dashboard",
        details:
          "Allows admins to manage data sources, view statistics, and generate weather reports.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
    ],
    image: "https://example.com/weather-monitoring-image.jpg",
  },
  {
    title: "Customer Relationship Management (CRM) System",
    description:
      "A CRM system helps businesses manage interactions with customers, streamline processes, and improve profitability.",
    components: [
      {
        name: "Customer Management",
        details:
          "Keeps track of customer information such as contact details, purchase history, and preferences.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Sales Automation",
        details:
          "Automates sales processes, tracks leads, and manages follow-ups to increase conversion rates.",
        technologies: ["Salesforce", "JavaScript", "Node.js"],
      },
      {
        name: "Analytics and Reporting",
        details:
          "Generates reports on customer behavior, sales performance, and campaign results.",
        technologies: ["Power BI", "MongoDB", "Node.js"],
      },
      {
        name: "Marketing Automation",
        details:
          "Helps manage email campaigns, social media marketing, and customer segmentation.",
        technologies: ["Mailchimp API", "Node.js", "ReactJS"],
      },
    ],
    image: "https://example.com/crm-system-image.jpg",
  },
  {
    title: "Virtual Classroom Platform",
    description:
      "A platform that facilitates online learning, providing teachers and students with tools for live classes, assignments, and communication.",
    components: [
      {
        name: "Video Conferencing",
        details:
          "Enables live interaction between students and teachers with features like video, audio, and screen sharing.",
        technologies: ["WebRTC", "ReactJS", "Node.js"],
      },
      {
        name: "Assignment Submission",
        details:
          "Allows students to submit assignments online and provides grading functionality for teachers.",
        technologies: ["ReactJS", "MongoDB", "Node.js"],
      },
      {
        name: "Classroom Management",
        details:
          "Manages student attendance, class schedules, and course material.",
        technologies: ["MongoDB", "ReactJS", "Node.js"],
      },
      {
        name: "Live Chat",
        details:
          "Provides instant messaging for student-teacher communication.",
        technologies: ["Socket.io", "ReactJS", "Node.js"],
      },
    ],
    image: "https://example.com/virtual-classroom-image.jpg",
  },
  {
    title: "Travel Booking System",
    description:
      "A travel booking platform where users can search for flights, hotels, and rental cars, and make bookings online.",
    components: [
      {
        name: "Flight Booking",
        details:
          "Allows users to search, compare, and book flights based on their preferences and budget.",
        technologies: ["ReactJS", "REST API", "Node.js"],
      },
      {
        name: "Hotel Reservations",
        details:
          "Helps users find and book hotels by displaying availability, price comparisons, and user reviews.",
        technologies: ["ReactJS", "MongoDB", "Node.js"],
      },
      {
        name: "Car Rentals",
        details: "Users can select and book rental cars at their destination.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Payment Integration",
        details:
          "Integrates with payment systems to process bookings securely.",
        technologies: ["Stripe API", "Node.js", "ReactJS"],
      },
    ],
    image: "https://example.com/travel-booking-image.jpg",
  },
  {
    title: "IoT-Based Smart Home Automation",
    description:
      "A system to control and monitor home appliances such as lights, locks, and thermostats remotely via mobile apps or voice commands.",
    components: [
      {
        name: "Smart Lighting Control",
        details:
          "Allows users to control lighting remotely and set schedules for automatic adjustments.",
        technologies: ["Arduino", "ReactJS", "Node.js"],
      },
      {
        name: "Temperature Control",
        details: "Regulates room temperature by controlling smart thermostats.",
        technologies: ["React Native", "IoT", "Node.js"],
      },
      {
        name: "Security Monitoring",
        details:
          "Monitors home security via cameras and alerts homeowners in case of suspicious activity.",
        technologies: ["Raspberry Pi", "React Native", "Node.js"],
      },
      {
        name: "Voice Integration",
        details:
          "Integrates with voice assistants like Amazon Alexa or Google Assistant for hands-free control.",
        technologies: ["AWS Alexa", "Node.js", "React Native"],
      },
    ],
    image: "https://example.com/smart-home-image.jpg",
  },
  {
    title: "Event Management System",
    description:
      "A system to manage and organize events, track RSVPs, and provide event schedules to attendees.",
    components: [
      {
        name: "Event Registration",
        details:
          "Enables attendees to register for events online, track availability, and receive confirmation emails.",
        technologies: ["ReactJS", "MongoDB", "Node.js"],
      },
      {
        name: "Ticketing",
        details:
          "Facilitates ticket purchases and generates digital tickets for attendees.",
        technologies: ["Stripe API", "Node.js", "ReactJS"],
      },
      {
        name: "Scheduling",
        details:
          "Allows event organizers to create schedules for sessions, speakers, and activities.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Feedback Collection",
        details:
          "Gathers feedback from attendees after the event to help improve future events.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
    ],
    image: "https://example.com/event-management-image.jpg",
  },
  {
    title: "Online Job Portal",
    description:
      "An online platform for job seekers to find job listings and apply for jobs, and for employers to post openings and manage candidates.",
    components: [
      {
        name: "Job Listings",
        details:
          "Displays available job positions and allows job seekers to filter them by category, location, and salary.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Resume Upload",
        details:
          "Lets job seekers upload and update their resumes, and employers to search resumes based on keywords.",
        technologies: ["ReactJS", "AWS S3", "Node.js"],
      },
      {
        name: "Job Search",
        details:
          "Enables job seekers to search for positions using filters and keywords.",
        technologies: ["ReactJS", "MongoDB", "Node.js"],
      },
      {
        name: "Employer Dashboard",
        details:
          "Allows employers to manage job postings, view applicant details, and track hiring progress.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
    ],
    image: "https://example.com/job-portal-image.jpg",
  },
  {
    title: "iLearn: A Digital Learning Environment",
    description:
      "An online platform that provides educational content, quizzes, and discussion forums for students and teachers.",
    components: [
      {
        name: "Course Management",
        details:
          "Allows teachers to create, manage, and organize courses with modules, assignments, and quizzes.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Interactive Quizzes",
        details:
          "Provides students with quizzes to assess their understanding and progress in the course.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Discussion Forums",
        details:
          "Facilitates communication between students and teachers through discussion threads.",
        technologies: ["ReactJS", "Socket.io", "Node.js"],
      },
      {
        name: "Progress Tracking",
        details:
          "Tracks student progress and provides insights on completed lessons, grades, and performance.",
        technologies: ["ReactJS", "MongoDB", "Node.js"],
      },
    ],
    image: "https://example.com/ilearn-image.jpg",
  },
  {
    title: "Mentcare: A Mental Health Support System",
    description:
      "A system designed to provide mental health support through therapy sessions, mood tracking, and resources.",
    components: [
      {
        name: "Therapy Sessions",
        details:
          "Allows users to book and attend virtual therapy sessions with licensed counselors.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "Mood Tracking",
        details:
          "Tracks user mood and provides recommendations based on their emotional state.",
        technologies: ["ReactJS", "MongoDB", "Node.js"],
      },
      {
        name: "Mental Health Resources",
        details:
          "Provides articles, videos, and exercises to support mental health and well-being.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
      {
        name: "User Feedback",
        details:
          "Collects user feedback on services and therapy sessions to improve the system.",
        technologies: ["ReactJS", "Node.js", "MongoDB"],
      },
    ],
    image: "https://example.com/mentcare-image.jpg",
  },
  {
    title: "A Personal Insulin Pump",
    description:
      "A system that delivers insulin doses to diabetic patients based on real-time glucose levels and preset configurations.",
    components: [
      {
        name: "Glucose Monitoring",
        details: "Real-time tracking of blood glucose levels using sensors.",
        technologies: ["IoT Sensors", "Embedded Systems", "Bluetooth"],
      },
      {
        name: "Insulin Delivery Mechanism",
        details:
          "Administers insulin based on input from glucose monitoring and user settings.",
        technologies: ["Microcontroller", "Actuator Systems"],
      },
      {
        name: "User Interface",
        details:
          "Allows patients to configure settings and view their glucose trends.",
        technologies: ["Mobile App", "React Native"],
      },
      {
        name: "Safety and Alerts",
        details:
          "Triggers alarms for low insulin, abnormal glucose levels, or device malfunctions.",
        technologies: ["Real-Time OS", "Push Notifications"],
      },
    ],
    image: "https://example.com/insulin-pump-image.jpg",
  },
  {
    title: "A Wilderness Weather Station",
    description:
      "A remote station that monitors environmental conditions such as temperature, humidity, and wind speed.",
    components: [
      {
        name: "Data Collection",
        details:
          "Sensors collect weather parameters like temperature and wind.",
        technologies: ["IoT Sensors", "Solar Power"],
      },
      {
        name: "Data Transmission",
        details: "Sends data to a central server via wireless communication.",
        technologies: ["LoRaWAN", "Satellite Uplink"],
      },
      {
        name: "Analytics Dashboard",
        details: "Visualizes collected data for researchers and forecasters.",
        technologies: ["Python", "Django", "ReactJS"],
      },
      {
        name: "Maintenance and Alerts",
        details:
          "Monitors device health and alerts for malfunctions or battery issues.",
        technologies: ["IoT Monitoring Tools", "Push Notifications"],
      },
    ],
    image: "https://example.com/weather-station-image.jpg",
  },
  {
    title: "Airbus 340 Flight Control System",
    description:
      "A critical system for controlling the aircraft, ensuring safety and efficiency during flight operations.",
    components: [
      {
        name: "Primary Flight Control",
        details:
          "Manages aircraft's movements such as roll, pitch, and yaw based on pilot inputs.",
        technologies: ["Embedded Systems", "Real-Time OS"],
      },
      {
        name: "Flight Data Monitoring",
        details:
          "Collects and analyzes in-flight data for safety and performance metrics.",
        technologies: ["Avionics Systems", "Telemetry"],
      },
      {
        name: "Navigation System",
        details:
          "Provides precise navigation using GPS and inertial measurement units.",
        technologies: ["GPS", "IMUs", "Autopilot Algorithms"],
      },
      {
        name: "Emergency Control",
        details:
          "Handles critical failures and ensures safety with redundancy systems.",
        technologies: ["Fail-Safe Mechanisms", "Redundant Systems"],
      },
    ],
    image: "https://example.com/airbus-control-system-image.jpg",
  },
];

export const FPE_IMG_URL =
  "https://media.licdn.com/dms/image/v2/C4D12AQHSGL1WWAVp8g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520240311244?e=2147483647&v=beta&t=BCyjVqMdhzTsEysQ2zMCyeOs-RYcG6FFYQvkT6hs9Zs";

export const LOGO_URL =
  "https://res.cloudinary.com/drdgj0pch/image/upload/v1733242242/srs-tool.png";

export const HERO_PAGE1_IMG_URL =
  "https://res.cloudinary.com/drdgj0pch/image/upload/v1733328790/srs_heromain_bg.png";

export const HERO_PAGE1_BACKGROUND =
  "https://www.w3schools.com/images/background_in_space.webp";
