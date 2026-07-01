/* ============================================
   PORTFOLIO — INTERACTIVITY & DATA
   ============================================ */

// Set Current Year in Footer if exists
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── Navbar Scroll Effect ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

/* ── Mobile Menu Toggle ── */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

/* ── Scroll Reveal Animations ── */
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
revealElements.forEach(el => revealObserver.observe(el));

/* ── Animated Counters ── */
const counters = document.querySelectorAll('.stat-number');
let hasCounted = false;

const startCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // ms
        const increment = target / (duration / 16); // 60fps
        
        let current = 0;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (target > 10 ? '+' : '');
            }
        };
        updateCounter();
    });
};

// Trigger counters when stats section is visible
const statsSection = document.querySelector('.stats');
const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasCounted) {
        startCounters();
        hasCounted = true;
    }
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

/* ── Project Data ── */
const projectsData = [
    {
        id: 'bicopilot',
        title: 'Business Intelligence Copilot',
        type: 'Enterprise AI Analytics',
        category: 'ai',
        image: 'images/bicopilot-main.png',
        shortDesc: 'An Enterprise-grade AI platform that enables seamless data ingestion, automated cleaning, and natural language querying.',
        fullDesc: 'BI Copilot is a comprehensive AI analytics platform designed to democratize data intelligence. It allows non-technical users to upload raw business data and interact with it using natural language, receiving automated visualizations, predictive forecasts, and strategic business recommendations.',
        tech: ['Next.js', 'FastAPI', 'GPT-4o', 'Pandas'],
        features: [
            'Natural Language Query (NLQ) powered by GPT-4o',
            'Automated Data Cleaning and Schema Analysis',
            'Time-series forecasting (Scikit-learn)',
            'Dynamic visualizations and interactive dashboards'
        ],
        liveLink: 'https://bicopilot.vercel.app/',
        gallery: [
            'images/after_theme_toggle_1782922396083.png',
            'images/history_section_1782922286365.png',
            'images/bicopilot-section1.png',
            'images/bicopilot-full.png'
        ]
    },
    {
        id: 'acadsify',
        title: 'Acadsify Lifecycle PMS',
        type: 'Academic Management System',
        category: 'fullstack',
        image: 'images/acadsify-main.png',
        shortDesc: 'A sovereign, state-of-the-art Academic Project Lifecycle Management System.',
        fullDesc: 'Acadsify is engineered to bridge the gap between traditional academic administrative overhead and modern collaborative workflows. By synthesizing real-time communication, structured mentorship, and automated evaluation, Acadsify serves as the central nervous system for institutional research and project coordination.',
        tech: ['React', 'Laravel', 'Radix UI', 'WebSocket'],
        features: [
            'Dynamic Group Formation and Mentorship Marketplace',
            'Real-time Team Chat with WebSocket support',
            'Evaluation Console with granular approval workflows',
            'Comprehensive Role-Based Access Control (RBAC)'
        ],
        liveLink: 'https://acadsify-demo.vercel.app/',
        gallery: [
            'images/acadsify_explore_1782921688779.webp',
            'images/acadsify_admin_dashboard_1782921989438.png',
            'images/acadsify_faculty_dashboard_1782922095634.png',
            'images/acadsify_student_kanban_1782922148735.png',
            'images/acadsify_admin_projects_1782922031478.png',
            'images/acadsify_admin_students_1782922038816.png',
            'images/acadsify-full.png'
        ]
    },
    {
        id: 'courtsync',
        title: 'CourtSync Platform',
        type: 'Sports Facility Management',
        category: 'fullstack',
        image: 'images/courtsync-home.png',
        shortDesc: 'A comprehensive platform for sports facility management, booking, and on-site dining.',
        fullDesc: 'CourtSync offers a unified experience for sports enthusiasts. It allows users to book badminton courts and cricket pitches in real-time, order food from the in-house cafe, and manage their memberships, all through a sleek dark-themed interface.',
        tech: ['Next.js', 'Prisma', 'Tailwind', 'PostgreSQL'],
        features: [
            'Real-time court availability and booking engine',
            'Integrated cafe ordering system (Dine-in / Delivery)',
            'Secure authentication and role-based dashboards',
            'Sleek, highly responsive UI with GSAP/Framer Motion animations'
        ],
        gallery: [
            'images/courtsync_explore_1782921464970.webp',
            'images/courtsync_booking_1782921516140.png',
            'images/courtsync_cafe_1782921534538.png',
            'images/courtsync_dashboard_1782921575772.png',
            'images/courtsync-full.png'
        ]
    },
    {
        id: 'fatherapp',
        title: 'FatherApp Food Delivery',
        type: 'Food Ordering Platform',
        category: 'fullstack',
        image: 'images/fatherapp-main.png',
        shortDesc: 'A modern food ordering platform with a warm interface and seamless checkout.',
        fullDesc: 'FatherApp is a full-stack food delivery and restaurant management system. It provides a vibrant, user-friendly frontend for customers to browse categories, customize orders, and checkout seamlessly, backed by a robust API.',
        tech: ['React', 'Vite', 'Node.js', 'MongoDB'],
        features: [
            'Dynamic category filtering and search',
            'Secure checkout integration with Stripe',
            'User profile and order history management',
            'Responsive design built with DaisyUI'
        ],
        liveLink: 'https://father-app.vercel.app/',
        gallery: [
            'images/fatherapp_explore_1782922425771.webp',
            'images/father_menu_items_1782922549221.png',
            'images/father_cart_page_1782922711371.png',
            'images/father_checkout_1782922732098.png',
            'images/father_order_history_1782922750782.png',
            'images/fatherapp-full.png'
        ]
    },
    {
        id: 'behrouz',
        title: 'Behrouz Royal Website',
        type: 'Restaurant Homepage',
        category: 'ecommerce',
        image: 'images/behrouz-main.png',
        shortDesc: 'A premium, traditional UI designed for Behrouz showing off their delicious food.',
        fullDesc: 'A gorgeous, visually striking restaurant homepage featuring hero sliders, beautiful typography, parallax scrolling effects, and reservation capabilities. Built to reflect royalty and rich traditional hygiene.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Google Fonts'],
        features: [
            'Dynamic hero slider for featured dishes',
            'Smooth scroll reveal animations',
            'Online table reservation form',
            'Fully responsive across all devices'
        ],
        gallery: [
            'images/behrouz-section1.png',
            'images/behrouz-section2.png',
            'images/behrouz-full.png'
        ]
    },
    {
        id: 'fairyforest',
        title: 'Fairy Forest',
        type: 'Immersive UI Design',
        category: 'fullstack',
        image: 'images/fairyforest-main.png',
        shortDesc: 'A magical parallax scrolling web experience.',
        fullDesc: 'Fairy Forest pushes the boundaries of CSS and JavaScript parallax effects to create a deep, immersive digital forest. As users scroll, multiple background layers move at different speeds giving a strong sense of 3D depth.',
        tech: ['Vanilla JS', 'CSS Parallax', 'HTML5'],
        features: [
            'Multi-layer deep parallax effect',
            'Immersive storytelling interface',
            'Optimized smooth animations',
            'Custom atmospheric styling'
        ],
        gallery: [
            'images/fairyforest-section1.png',
            'images/fairyforest-section2.png',
            'images/fairyforest-full.png'
        ]
    }
];

/* ── Render Featured Projects ── */
const featuredContainer = document.getElementById('featuredContainer');

function renderProjects() {
    if (!featuredContainer) return;
    featuredContainer.innerHTML = '';
    
    projectsData.forEach((project, index) => {
        // The CSS relies on :nth-child(even) to reverse the layout!
        const card = document.createElement('div');
        card.className = 'featured-project reveal';
        card.style.animationDelay = `${Math.random() * 0.3}s`;
        
        let liveLinkBtn = project.liveLink 
            ? `<a href="${project.liveLink}" target="_blank" class="btn btn-primary" style="margin-left: 10px;" onclick="event.stopPropagation()">Live Preview</a>` 
            : '';

        card.innerHTML = `
            <div class="featured-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="image-overlay">
                    <button class="btn btn-secondary view-project-btn" onclick="openModal('${project.id}')">View Case Study</button>
                    ${liveLinkBtn}
                </div>
            </div>
            <div class="featured-info">
                <div class="project-type" data-en="${project.type}" data-jp="${project.type}">${project.type}</div>
                <h3 data-en="${project.title}" data-jp="${project.title}">${project.title}</h3>
                <p class="project-desc" data-en="${project.shortDesc}" data-jp="${project.shortDesc}">${project.shortDesc}</p>
                <div class="tech-tags">
                    ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
            </div>
        `;
        
        featuredContainer.appendChild(card);
        // Trigger reveal manually for dynamically added items
        setTimeout(() => card.classList.add('revealed'), 50);
    });
}

// Initial render
renderProjects();

/* ── Modal Logic ── */
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');

// Elements to populate
const mImage = document.getElementById('modalImage');
const mType = document.getElementById('modalType');
const mTitle = document.getElementById('modalTitle');
const mDesc = document.getElementById('modalDesc');
const mTech = document.getElementById('modalTechStack');
const mFeatures = document.getElementById('modalFeatures');
const mGallery = document.getElementById('modalGallery');
const mGalleryWrapper = document.getElementById('modalGalleryWrapper');

function openModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    // Populate data
    mImage.src = project.image;
    mType.textContent = project.type;
    mTitle.textContent = project.title;
    mDesc.textContent = project.fullDesc;
    
    mTech.innerHTML = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    mFeatures.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');
    
    if (project.gallery && project.gallery.length > 0) {
        mGalleryWrapper.style.display = 'block';
        mGallery.innerHTML = project.gallery.map(img => `<img src="${img}" alt="Gallery image">`).join('');
    } else {
        mGalleryWrapper.style.display = 'none';
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

// Close on backdrop click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Attach openModal to featured projects buttons
document.querySelectorAll('.view-project-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        openModal(e.target.getAttribute('data-id'));
    });
});
