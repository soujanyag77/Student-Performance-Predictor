document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. LOCALSTORAGE DATABASE INITIALIZER
       ========================================== */
    const defaultStudents = [
        {
            id: "student_john",
            name: "John Doe",
            username: "student",
            parentUsername: "parent",
            currentPrediction: { score: 81, category: "Excellent" },
            history: [
                { date: "2026-05-10", attendance: 82, assignments: 75, unittests: 78, practicals: 85, participation: 70, score: 78, category: "Average" },
                { date: "2026-06-01", attendance: 85, assignments: 78, unittests: 80, practicals: 90, participation: 72, score: 81, category: "Excellent" },
                { date: "2026-06-23", attendance: 90, assignments: 82, unittests: 82, practicals: 88, participation: 75, score: 83, category: "Excellent" }
            ],
            subjects: [
                { name: "Mathematics", marks: 82, teacher: "Mr. Sharma", attendance: 85, assignments: 80, unittests: 84 },
                { name: "Science", marks: 88, teacher: "Mrs. Verma", attendance: 92, assignments: 90, unittests: 85 },
                { name: "English", marks: 60, teacher: "Ms. Davis", attendance: 70, assignments: 62, unittests: 55 },
                { name: "Computer Science", marks: 92, teacher: "Alex Morgan", attendance: 95, assignments: 92, unittests: 90 }
            ],
            parentReports: {
                dayWise: [
                    { date: "2026-06-19", attendanceStatus: "Present", activeParticipation: "High", behavioralNote: "Attentive during coding labs." },
                    { date: "2026-06-20", attendanceStatus: "Present", activeParticipation: "Medium", behavioralNote: "Completed calculus drills on time." },
                    { date: "2026-06-22", attendanceStatus: "Present", activeParticipation: "High", behavioralNote: "Led the Science group discussion today." },
                    { date: "2026-06-23", attendanceStatus: "Present", activeParticipation: "Medium", behavioralNote: "Performed well in practical simulation." }
                ],
                weekly: [
                    { week: "Week 22 (June 1 - 5)", avgAttendance: "86%", assignmentsSubmitted: "4/4", performanceSummary: "Consistent scores. Practical skills are excellent." },
                    { week: "Week 23 (June 8 - 12)", avgAttendance: "88%", assignmentsSubmitted: "4/4", performanceSummary: "English quiz scores dipped slightly. Focus recommended." },
                    { week: "Week 24 (June 15 - 19)", avgAttendance: "90%", assignmentsSubmitted: "4/4", performanceSummary: "High engagement in Computer Science project work." }
                ],
                monthly: [
                    { month: "May 2026", testAverage: "78.4%", parentConsultationNeeded: "No", comments: "Steady development. Promising coding assignments." },
                    { month: "June 2026", testAverage: "81.6%", parentConsultationNeeded: "No", comments: "Exhibits positive growth. Strengthening problem solving skills." }
                ],
                annual: [
                    { year: "Academic Year 2025-26", gradePointAverage: "8.2 / 10", riskEvaluation: "Low Risk", finalRecommendation: "Highly suited for advanced algorithm streams and logic designs." }
                ]
            }
        },
        {
            id: "student_jane",
            name: "Jane Smith",
            username: "jane",
            parentUsername: "parent_jane",
            currentPrediction: { score: 53, category: "Average" },
            history: [
                { date: "2026-05-15", attendance: 65, assignments: 50, unittests: 45, practicals: 60, participation: 45, score: 53, category: "Average" },
                { date: "2026-06-10", attendance: 62, assignments: 45, unittests: 40, practicals: 58, participation: 40, score: 49, category: "Needs Attention" },
                { date: "2026-06-23", attendance: 68, assignments: 52, unittests: 48, practicals: 62, participation: 45, score: 55, category: "Average" }
            ],
            subjects: [
                { name: "Mathematics", marks: 48, teacher: "Mr. Sharma", attendance: 60, assignments: 45, unittests: 40 },
                { name: "Science", marks: 54, teacher: "Mrs. Verma", attendance: 65, assignments: 52, unittests: 48 },
                { name: "English", marks: 72, teacher: "Ms. Davis", attendance: 75, assignments: 70, unittests: 72 },
                { name: "Computer Science", marks: 50, teacher: "Alex Morgan", attendance: 62, assignments: 48, unittests: 42 }
            ],
            parentReports: {
                dayWise: [
                    { date: "2026-06-19", attendanceStatus: "Absent", activeParticipation: "None", behavioralNote: "Informed sick leave. Missed algebra review." },
                    { date: "2026-06-20", attendanceStatus: "Present", activeParticipation: "Low", behavioralNote: "Appeared distracted during classroom quizzes." },
                    { date: "2026-06-22", attendanceStatus: "Present", activeParticipation: "Medium", behavioralNote: "Participated in lab worksheets. Needs guidance." },
                    { date: "2026-06-23", attendanceStatus: "Present", activeParticipation: "Low", behavioralNote: "English project work is progressing well." }
                ],
                weekly: [
                    { week: "Week 22 (June 1 - 5)", avgAttendance: "64%", assignmentsSubmitted: "2/4", performanceSummary: "Missed double homeworks. Attention needed in math classes." },
                    { week: "Week 23 (June 8 - 12)", avgAttendance: "60%", assignmentsSubmitted: "3/4", performanceSummary: "Test scores dropping in Computer Science logic gates." },
                    { week: "Week 24 (June 15 - 19)", avgAttendance: "68%", assignmentsSubmitted: "4/4", performanceSummary: "Showing minor progress. Submission rates have improved." }
                ],
                monthly: [
                    { month: "May 2026", testAverage: "53.2%", parentConsultationNeeded: "Yes", comments: "Urgent need for remedial classes in Algebra." },
                    { month: "June 2026", testAverage: "51.0%", parentConsultationNeeded: "Yes", comments: "Requires focused home study programs to support basic grades." }
                ],
                annual: [
                    { year: "Academic Year 2025-26", gradePointAverage: "5.4 / 10", riskEvaluation: "Moderate Risk", finalRecommendation: "Scheduled for mandatory math bridging modules in next semester." }
                ]
            }
        },
        {
            id: "student_alex",
            name: "Alex Johnson",
            username: "alex",
            parentUsername: "parent_alex",
            currentPrediction: { score: 42, category: "Needs Attention" },
            history: [
                { date: "2026-06-01", attendance: 50, assignments: 40, unittests: 38, practicals: 55, participation: 35, score: 43, category: "Needs Attention" },
                { date: "2026-06-23", attendance: 48, assignments: 38, unittests: 35, practicals: 58, participation: 38, score: 42, category: "Needs Attention" }
            ],
            subjects: [
                { name: "Mathematics", marks: 38, teacher: "Mr. Sharma", attendance: 45, assignments: 35, unittests: 32 },
                { name: "Science", marks: 42, teacher: "Mrs. Verma", attendance: 48, assignments: 40, unittests: 36 },
                { name: "English", marks: 50, teacher: "Ms. Davis", attendance: 55, assignments: 48, unittests: 45 },
                { name: "Computer Science", marks: 44, teacher: "Alex Morgan", attendance: 50, assignments: 42, unittests: 38 }
            ],
            parentReports: {
                dayWise: [
                    { date: "2026-06-19", attendanceStatus: "Present", activeParticipation: "Low", behavioralNote: "Struggled with calculus equations." },
                    { date: "2026-06-20", attendanceStatus: "Absent", activeParticipation: "None", behavioralNote: "Unexcused absence recorded today." },
                    { date: "2026-06-22", attendanceStatus: "Present", activeParticipation: "Low", behavioralNote: "Incomplete science lab worksheet." },
                    { date: "2026-06-23", attendanceStatus: "Present", activeParticipation: "Medium", behavioralNote: "Demonstrated interest in practical experiment." }
                ],
                weekly: [
                    { week: "Week 22 (June 1 - 5)", avgAttendance: "50%", assignmentsSubmitted: "1/4", performanceSummary: "Attendance remains key concern. Homework remains due." },
                    { week: "Week 23 (June 8 - 12)", avgAttendance: "45%", assignmentsSubmitted: "2/4", performanceSummary: "Scored below passing threshold in weekly test series." },
                    { week: "Week 24 (June 15 - 19)", avgAttendance: "48%", assignmentsSubmitted: "2/4", performanceSummary: "Requires structured mentoring plan to avoid term failure." }
                ],
                monthly: [
                    { month: "May 2026", testAverage: "44.0%", parentConsultationNeeded: "Yes", comments: "Immediate intervention required from parents and counselors." },
                    { month: "June 2026", testAverage: "41.5%", parentConsultationNeeded: "Yes", comments: "Critical attendance alerts sent. Grades are in red category." }
                ],
                annual: [
                    { year: "Academic Year 2025-26", gradePointAverage: "4.2 / 10", riskEvaluation: "High Risk", finalRecommendation: "Requires comprehensive counseling support and structured weekly check-ins." }
                ]
            }
        }
    ];

    const defaultFeedbacks = [
        { role: "Parent", name: "Robert Doe", rating: 5, date: "2026-06-15", comments: "Excellent tool. Helps me monitor John's test average weekly and alerts me of weakness areas early." },
        { role: "Student", name: "Jane Smith", rating: 4, date: "2026-06-20", comments: "Suggestions help me see where I need to focus. The English tips were very accurate." },
        { role: "Teacher", name: "Mrs. Verma", rating: 5, date: "2026-06-22", comments: "The subject averages chart allows me to target group remedial classes instead of analyzing individual spreadsheets." }
    ];

    const defaultRemarks = [
        { id: "rem_1", studentId: "student_john", subject: "Mathematics", teacher: "Mr. Sharma", date: "2026-06-20", topic: "Calculus", status: "needs-improvement", comment: "Struggling with differential equations limits. Needs review of baseline algebra." },
        { id: "rem_2", studentId: "student_jane", subject: "Mathematics", teacher: "Mr. Sharma", date: "2026-06-21", topic: "Calculus", status: "needs-improvement", comment: "Unable to solve basic limits. Needs to focus on standard graph gradients." },
        { id: "rem_3", studentId: "student_alex", subject: "Mathematics", teacher: "Mr. Sharma", date: "2026-06-22", topic: "Algebra", status: "needs-improvement", comment: "Struggling with quadratic factoring equations." }
    ];

    const defaultCirculars = [
        { id: "circ_1", date: "2026-06-20", author: "Admin Office", title: "Semester Final Exams Schedule", content: "Final examinations are scheduled to begin on July 10th. Attendance reviews must be finalized by teachers before this date." }
    ];

    const defaultNotifications = [
        { id: "not_1", studentId: "student_john", title: "Assessment Published", message: "Mr. Sharma has updated your Mathematics evaluation profile and comments.", date: "2026-06-23", readByStudent: false, readByParent: false }
    ];

    // DB Table setters/getters
    if (!localStorage.getItem('students')) localStorage.setItem('students', JSON.stringify(defaultStudents));
    if (!localStorage.getItem('feedbacks')) localStorage.setItem('feedbacks', JSON.stringify(defaultFeedbacks));
    if (!localStorage.getItem('remarks')) localStorage.setItem('remarks', JSON.stringify(defaultRemarks));
    if (!localStorage.getItem('circulars')) localStorage.setItem('circulars', JSON.stringify(defaultCirculars));
    if (!localStorage.getItem('notifications')) localStorage.setItem('notifications', JSON.stringify(defaultNotifications));
    if (!localStorage.getItem('confirmations')) localStorage.setItem('confirmations', JSON.stringify([]));
    if (!localStorage.getItem('customUsers')) localStorage.setItem('customUsers', JSON.stringify([]));

    const getStudentsDB = () => JSON.parse(localStorage.getItem('students'));
    const setStudentsDB = (data) => localStorage.setItem('students', JSON.stringify(data));
    const getFeedbacksDB = () => JSON.parse(localStorage.getItem('feedbacks'));
    const setFeedbacksDB = (data) => localStorage.setItem('feedbacks', JSON.stringify(data));
    const getRemarksDB = () => JSON.parse(localStorage.getItem('remarks'));
    const setRemarksDB = (data) => localStorage.setItem('remarks', JSON.stringify(data));
    const getCircularsDB = () => JSON.parse(localStorage.getItem('circulars'));
    const setCircularsDB = (data) => localStorage.setItem('circulars', JSON.stringify(data));
    const getNotificationsDB = () => JSON.parse(localStorage.getItem('notifications'));
    const setNotificationsDB = (data) => localStorage.setItem('notifications', JSON.stringify(data));
    const getConfirmationsDB = () => JSON.parse(localStorage.getItem('confirmations'));
    const setConfirmationsDB = (data) => localStorage.setItem('confirmations', JSON.stringify(data));
    const getCustomUsersDB = () => JSON.parse(localStorage.getItem('customUsers'));
    const setCustomUsersDB = (data) => localStorage.setItem('customUsers', JSON.stringify(data));


    /* ==========================================
       2. LIGHT/DARK THEME TOGGLE
       ========================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const initTheme = localStorage.getItem('theme') || 'dark';
    
    document.documentElement.setAttribute('data-theme', initTheme);

    themeToggleBtn.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme');
        const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
    });


    /* ==========================================
       3. SPA ROUTING & AUTHENTICATION
       ========================================== */
    const loginContainer = document.getElementById('login-container');
    const appContainer = document.getElementById('app-container');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    
    const userRoleBadge = document.getElementById('user-role-badge');
    const userNameDisplay = document.getElementById('user-name-display');
    const logoutBtn = document.getElementById('logout-btn');

    // Sidebar navigation and panels
    const sidebarMenu = document.getElementById('sidebar-menu');
    const contentPanels = document.querySelectorAll('.content-panel');

    // Mapped Teacher Subjects
    const teacherSubjectMap = {
        'mr_sharma': 'Mathematics',
        'mrs_verma': 'Science',
        'ms_davis': 'English',
        'alex': 'Computer Science'
    };

    // Load active session
    let currentUser = JSON.parse(sessionStorage.getItem('activeUser'));
    if (currentUser) {
        bootApplication(currentUser);
    } else {
        loginContainer.style.display = 'flex';
        appContainer.style.display = 'none';
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username-input').value.trim();
        const password = document.getElementById('password-input').value.trim();

        loginError.style.display = 'none';
        let session = null;

        // 1. Verify static Admin account
        if (username === 'admin' && password === 'admin123') {
            session = { role: 'Admin', name: 'System Administrator', id: 'admin_root' };
        } 
        // 2. Verify static Teacher accounts
        else if (username === 'mr_sharma' && password === 'sharma123') {
            session = { role: 'Teacher', name: 'Mr. Sharma', id: 'mr_sharma', subject: 'Mathematics' };
        } else if (username === 'mrs_verma' && password === 'verma123') {
            session = { role: 'Teacher', name: 'Mrs. Verma', id: 'mrs_verma', subject: 'Science' };
        } else if (username === 'ms_davis' && password === 'davis123') {
            session = { role: 'Teacher', name: 'Ms. Davis', id: 'ms_davis', subject: 'English' };
        } else if (username === 'alex' && password === 'alex123') {
            session = { role: 'Teacher', name: 'Alex Morgan', id: 'alex', subject: 'Computer Science' };
        } 
        // 3. Verify dynamically created/custom users or students/parents
        else {
            const customUsers = getCustomUsersDB();
            const matchingCustom = customUsers.find(u => u.username === username && u.password === password);
            
            if (matchingCustom) {
                session = { 
                    role: matchingCustom.role, 
                    name: matchingCustom.name, 
                    id: matchingCustom.role === 'Student' ? matchingCustom.username : matchingCustom.parentUsername 
                };
                if (matchingCustom.role === 'Teacher') {
                    session.subject = matchingCustom.subject || 'Mathematics';
                }
            } else {
                const students = getStudentsDB();
                const studentMatch = students.find(s => s.username === username && password === username + '123');
                
                if (studentMatch) {
                    session = { role: 'Student', name: studentMatch.name, id: studentMatch.id };
                } else {
                    const parentMatch = students.find(s => s.parentUsername === username && password === username + '123');
                    if (parentMatch) {
                        session = { role: 'Parent', name: parentMatch.name + "'s Parent", id: parentMatch.id };
                    }
                }
            }
        }

        if (session) {
            sessionStorage.setItem('activeUser', JSON.stringify(session));
            bootApplication(session);
            loginForm.reset();
        } else {
            loginError.textContent = "Invalid credentials. Please verify and try again.";
            loginError.style.display = 'block';
        }
    });

    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('activeUser');
        window.location.reload();
    });

    function bootApplication(user) {
        loginContainer.style.display = 'none';
        appContainer.style.display = 'grid';

        userNameDisplay.textContent = user.name;
        userRoleBadge.textContent = user.role;
        userRoleBadge.className = `status-badge ${user.role.toLowerCase() === 'admin' ? 'excellent' : user.role.toLowerCase() === 'teacher' ? 'average' : 'needs-attention'}`;

        renderSidebarTabs(user.role);

        // Load confirmation check & notifications badge
        checkMandatoryConfirmation(user);
        renderNotificationsBadge(user);

        // Set default active tab
        const firstTab = sidebarMenu.querySelector('.sidebar-link');
        if (firstTab) {
            activateTab(firstTab.getAttribute('data-target'));
        }
    }

    function renderSidebarTabs(role) {
        sidebarMenu.innerHTML = '';
        
        let tabs = [];
        if (role === 'Teacher') {
            tabs = [
                { target: 'teacher-students', icon: 'fa-user-graduate', label: 'My Students' },
                { target: 'teacher-predictor', icon: 'fa-brain', label: 'Subject Predictor' },
                { target: 'teacher-remarks', icon: 'fa-comment-medical', label: 'Topic Remarks' },
                { target: 'teacher-circulars', icon: 'fa-bullhorn', label: 'Circular Composer' }
            ];
        } else if (role === 'Admin') {
            tabs = [
                { target: 'admin-dashboard', icon: 'fa-chart-pie', label: 'Global Analytics' },
                { target: 'admin-users', icon: 'fa-users-cog', label: 'User Directory' },
                { target: 'admin-circulars', icon: 'fa-bullhorn', label: 'School Circulars' },
                { target: 'admin-appreciations', icon: 'fa-award', label: 'Appreciation Hub' }
            ];
        } else if (role === 'Student') {
            tabs = [
                { target: 'student-dashboard', icon: 'fa-chart-line', label: 'My Performance' },
                { target: 'student-coach', icon: 'fa-lightbulb', label: 'Target Areas' },
                { target: 'student-circulars', icon: 'fa-bullhorn', label: 'Circulars' },
                { target: 'student-notifications', icon: 'fa-bell', label: 'Inbox Alerts' },
                { target: 'student-feedback', icon: 'fa-comments', label: 'Submit Feedback' }
            ];
        } else if (role === 'Parent') {
            tabs = [
                { target: 'parent-progress', icon: 'fa-user-clock', label: 'Academic Progress' },
                { target: 'parent-reports', icon: 'fa-file-invoice', label: 'Timeline Reports' },
                { target: 'parent-bulletin', icon: 'fa-bullhorn', label: 'Circular Bulletin' },
                { target: 'parent-notifications', icon: 'fa-bell', label: 'Inbox Alerts' },
                { target: 'parent-feedback', icon: 'fa-comments', label: 'Submit Feedback' }
            ];
        }

        tabs.forEach(tab => {
            const li = document.createElement('li');
            li.innerHTML = `
                <button type="button" class="sidebar-link" data-target="${tab.target}">
                    <i class="fas ${tab.icon}"></i>
                    <span>${tab.label}</span>
                </button>
            `;
            sidebarMenu.appendChild(li);
        });

        const tabButtons = sidebarMenu.querySelectorAll('.sidebar-link');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                activateTab(btn.getAttribute('data-target'));
            });
        });
    }

    function activateTab(targetId) {
        const tabButtons = sidebarMenu.querySelectorAll('.sidebar-link');
        tabButtons.forEach(btn => {
            if (btn.getAttribute('data-target') === targetId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        contentPanels.forEach(panel => {
            if (panel.getAttribute('id') === targetId) {
                panel.style.display = 'block';
                triggerPanelLoad(targetId);
            } else {
                panel.style.display = 'none';
            }
        });
    }

    function triggerPanelLoad(panelId) {
        const user = JSON.parse(sessionStorage.getItem('activeUser'));
        if (!user) return;

        switch (panelId) {
            case 'teacher-students':
                loadTeacherStudentsTab(user);
                break;
            case 'teacher-predictor':
                loadTeacherPredictorTab(user);
                break;
            case 'teacher-remarks':
                loadTeacherRemarksTab(user);
                break;
            case 'teacher-circulars':
                loadCircularComposerTab(user);
                break;
            case 'admin-dashboard':
                loadAdminDashboardTab();
                break;
            case 'admin-users':
                loadAdminUsersTab();
                break;
            case 'admin-circulars':
                loadCircularComposerTab(user);
                break;
            case 'admin-appreciations':
                loadAdminAppreciationsTab();
                break;
            case 'student-dashboard':
                loadStudentDashboardTab(user.id);
                break;
            case 'student-coach':
                loadStudentCoachTab(user.id);
                break;
            case 'student-circulars':
                loadStudentCircularsTab(user.id);
                break;
            case 'student-notifications':
                loadNotificationsTab(user.id, 'student');
                break;
            case 'parent-progress':
                loadParentProgressTab(user.id);
                break;
            case 'parent-reports':
                loadParentReportsTab(user.id);
                break;
            case 'parent-bulletin':
                loadParentBulletinTab();
                break;
            case 'parent-notifications':
                loadNotificationsTab(user.id, 'parent');
                break;
        }
    }


    /* ==========================================
       4. MANDATORY REVIEW ACKNOWLEDGMENTS
       ========================================== */
    const confirmationBanner = document.getElementById('confirmation-banner');
    const confirmAcknowledgeBtn = document.getElementById('confirm-acknowledge-btn');

    function checkMandatoryConfirmation(user) {
        // Teachers, Students, and Parents must acknowledge. Admins are exempt.
        if (user.role === 'Admin') {
            confirmationBanner.style.display = 'none';
            return;
        }

        const confirmations = getConfirmationsDB();
        
        // Find if this specific user has confirmed today or recently
        const match = confirmations.find(c => c.username === user.id && c.role === user.role);

        if (match) {
            confirmationBanner.style.display = 'none';
        } else {
            confirmationBanner.style.display = 'flex';
            
            // Wire the acknowledgement click
            confirmAcknowledgeBtn.onclick = () => {
                const today = new Date().toISOString().split('T')[0];
                const newConfirm = {
                    studentId: user.role === 'Teacher' ? 'teacher_review' : user.id,
                    role: user.role,
                    username: user.id,
                    date: today
                };
                confirmations.push(newConfirm);
                setConfirmationsDB(confirmations);
                confirmationBanner.style.display = 'none';
                alert("Progress check confirmation recorded. Thank you!");
            };
        }
    }


    /* ==========================================
       5. NOTIFICATIONS INBOX UTILITY
       ========================================== */
    const notificationsBadge = document.getElementById('notifications-badge');

    function renderNotificationsBadge(user) {
        if (user.role === 'Admin' || user.role === 'Teacher') {
            notificationsBadge.style.display = 'none';
            return;
        }

        const notifications = getNotificationsDB();
        let unreadCount = 0;

        if (user.role === 'Student') {
            unreadCount = notifications.filter(n => n.studentId === user.id && !n.readByStudent).length;
        } else if (user.role === 'Parent') {
            unreadCount = notifications.filter(n => n.studentId === user.id && !n.readByParent).length;
        }

        if (unreadCount > 0) {
            notificationsBadge.textContent = unreadCount;
            notificationsBadge.style.display = 'flex';
        } else {
            notificationsBadge.style.display = 'none';
        }
    }

    function loadNotificationsTab(studentId, viewType) {
        const notifications = getNotificationsDB();
        const container = document.getElementById(`${viewType}-notifications-list`);
        container.innerHTML = '';

        const userNotifications = notifications.filter(n => n.studentId === studentId);
        
        if (userNotifications.length === 0) {
            container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 30px;">Your alerts inbox is currently empty.</div>`;
            return;
        }

        // Sort by date descending
        const sorted = [...userNotifications].reverse();

        sorted.forEach(not => {
            const isUnread = viewType === 'student' ? !not.readByStudent : !not.readByParent;
            
            const card = document.createElement('div');
            card.className = `glass-card notification-card ${isUnread ? 'unread' : ''}`;
            card.style.padding = '20px';
            card.style.marginBottom = '16px';
            card.style.borderLeft = isUnread ? '4px solid var(--accent-purple)' : '1px solid var(--glass-border)';

            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                    <h4 style="font-size: 1.1rem; color: var(--text-primary);">${not.title}</h4>
                    <span style="font-size: 0.8rem; color: var(--text-muted);">${not.date}</span>
                </div>
                <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.4;">${not.message}</p>
            `;
            container.appendChild(card);
        });

        // Mark all as read for this user
        notifications.forEach(n => {
            if (n.studentId === studentId) {
                if (viewType === 'student') n.readByStudent = true;
                if (viewType === 'parent') n.readByParent = true;
            }
        });
        setNotificationsDB(notifications);
        
        // Refresh header count
        const user = JSON.parse(sessionStorage.getItem('activeUser'));
        renderNotificationsBadge(user);
    }


    /* ==========================================
       6. PARENT: CIRCULARS BULLETIN
       ========================================== */
    function loadParentBulletinTab() {
        const activeUser = JSON.parse(sessionStorage.getItem('activeUser'));
        const student = getStudentsDB().find(s => s.parentUsername === activeUser.id || s.parentUsername === 'parent');
        if (!student) return;

        const circulars = getCircularsDB();
        const container = document.getElementById('parent-circulars-list');
        container.innerHTML = '';

        // Filter circulars based on targeting
        const filteredCirculars = circulars.filter(circ => {
            if (!circ.target || circ.target === 'entire-school') return true;
            if (circ.target === 'specific-parent' && circ.targetStudent === student.id) return true;
            if (circ.target === 'specific-student' && circ.targetStudent === student.id) return true;
            // Class-based filtering would require class info in student data
            return false;
        });

        if (filteredCirculars.length === 0) {
            container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 30px;">No circular alerts have been published for your child.</div>`;
            return;
        }

        // Reverse to show latest first
        const sorted = [...filteredCirculars].reverse();

        sorted.forEach(circ => {
            const card = document.createElement('div');
            card.className = 'glass-card';
            card.style.padding = '24px';
            card.style.marginBottom = '20px';
            
            const targetLabel = circ.target === 'entire-school' ? 'Entire School' : 
                               circ.target === 'specific-parent' ? 'Parent' : 
                               circ.target === 'specific-student' ? 'Student' : 'Class';
            
            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom: 12px; border-bottom: 1px solid var(--glass-border); padding-bottom: 8px;">
                    <div>
                        <h4 style="font-size: 1.2rem; color: var(--accent-blue);">${circ.title}</h4>
                        <div style="display:flex; gap: 12px; margin-top: 4px;">
                            <span style="font-size: 0.8rem; color: var(--text-muted);">Author: ${circ.author}</span>
                            <span class="status-badge average" style="padding: 2px 8px; font-size: 0.7rem;">${targetLabel}</span>
                        </div>
                    </div>
                    <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 700;">${circ.date}</span>
                </div>
                <p style="color: var(--text-secondary); font-size: 0.975rem; line-height: 1.5; white-space: pre-wrap;">${circ.content}</p>
            `;
            container.appendChild(card);
        });
    }

    /* ==========================================
       6.5. STUDENT: CIRCULARS
       ========================================== */
    function loadStudentCircularsTab(studentId) {
        const circulars = getCircularsDB();
        const container = document.getElementById('student-circulars-list');
        container.innerHTML = '';

        // Filter circulars based on targeting
        const filteredCirculars = circulars.filter(circ => {
            if (!circ.target || circ.target === 'entire-school') return true;
            if (circ.target === 'specific-student' && circ.targetStudent === studentId) return true;
            // Class-based filtering would require class info in student data
            return false;
        });

        if (filteredCirculars.length === 0) {
            container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 30px;">No circular alerts have been published for you.</div>`;
            return;
        }

        // Reverse to show latest first
        const sorted = [...filteredCirculars].reverse();

        sorted.forEach(circ => {
            const card = document.createElement('div');
            card.className = 'glass-card';
            card.style.padding = '24px';
            card.style.marginBottom = '20px';
            
            const targetLabel = circ.target === 'entire-school' ? 'Entire School' : 
                               circ.target === 'specific-student' ? 'For You' : 'Class';
            
            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom: 12px; border-bottom: 1px solid var(--glass-border); padding-bottom: 8px;">
                    <div>
                        <h4 style="font-size: 1.2rem; color: var(--accent-blue);">${circ.title}</h4>
                        <div style="display:flex; gap: 12px; margin-top: 4px;">
                            <span style="font-size: 0.8rem; color: var(--text-muted);">Author: ${circ.author}</span>
                            <span class="status-badge average" style="padding: 2px 8px; font-size: 0.7rem;">${targetLabel}</span>
                        </div>
                    </div>
                    <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 700;">${circ.date}</span>
                </div>
                <p style="color: var(--text-secondary); font-size: 0.975rem; line-height: 1.5; white-space: pre-wrap;">${circ.content}</p>
            `;
            container.appendChild(card);
        });
    }


    /* ==========================================
       7. TEACHER: STUDENT DIRECTORY (RESTRICTED SUBJECT)
       ========================================== */
    const searchTeacherInput = document.getElementById('teacher-search-input');
    const teacherTableBody = document.getElementById('teacher-table-body');
    const teacherStudentDetailModal = document.getElementById('teacher-student-modal');
    const teacherModalCloseBtn = document.getElementById('teacher-modal-close');

    function loadTeacherStudentsTab(teacherUser) {
        const subject = teacherUser.subject || 'Mathematics';
        document.getElementById('teacher-subject-indicator').textContent = subject;

        renderTeacherDirectoryTable(teacherUser, "");

        // Set up search trigger
        searchTeacherInput.oninput = (e) => {
            renderTeacherDirectoryTable(teacherUser, e.target.value.toLowerCase().trim());
        };
    }

    function renderTeacherDirectoryTable(teacherUser, filterText) {
        const students = getStudentsDB();
        const subjectName = teacherUser.subject;
        teacherTableBody.innerHTML = '';

        const filtered = students.filter(s => s.name.toLowerCase().includes(filterText));

        if (filtered.length === 0) {
            teacherTableBody.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">
                        No students found matching your query.
                    </td>
                </tr>`;
            return;
        }

        filtered.forEach(student => {
            // Find subject block in student record
            const subBlock = student.subjects.find(sub => sub.name === subjectName);
            if (!subBlock) return;

            // Classify current grade of subject
            const score = subBlock.marks;
            const category = score >= 80 ? 'Excellent' : score >= 50 ? 'Average' : 'Needs Attention';
            const categoryClass = category.toLowerCase().replace(" ", "-");

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${student.name}</strong></td>
                <td>${subBlock.attendance}%</td>
                <td>${subBlock.unittests}/100</td>
                <td><strong>${score}%</strong></td>
                <td><span class="status-badge ${categoryClass}">${category}</span></td>
                <td>
                    <button type="button" class="btn btn-secondary btn-sm view-profile-btn" data-id="${student.id}" style="padding: 6px 12px; font-size: 0.8rem;">
                        <i class="fas fa-eye"></i> View Profile
                    </button>
                </td>
            `;
            teacherTableBody.appendChild(tr);
        });

        // Wire profile preview click
        const viewButtons = teacherTableBody.querySelectorAll('.view-profile-btn');
        viewButtons.forEach(btn => {
            btn.onclick = () => {
                showTeacherStudentModal(btn.getAttribute('data-id'), subjectName);
            };
        });
    }

    function showTeacherStudentModal(studentId, subjectName) {
        const student = getStudentsDB().find(s => s.id === studentId);
        const remarks = getRemarksDB().filter(r => r.studentId === studentId && r.subject === subjectName);

        if (!student) return;

        document.getElementById('tmodal-student-name').textContent = student.name;
        document.getElementById('tmodal-subject').textContent = subjectName;

        // Subject history breakdown
        const historyTBody = document.getElementById('tmodal-history-tbody');
        historyTBody.innerHTML = '';
        
        // Find subject grades from student history logs
        student.history.forEach(log => {
            // Estimate subject performance matching overall history dates
            const scoreEst = Math.round(log.score * (1 + (Math.random() * 0.1 - 0.05))); // mock variation
            const finalEst = Math.min(100, Math.max(0, scoreEst));
            const catEst = finalEst >= 80 ? 'Excellent' : finalEst >= 50 ? 'Average' : 'Needs Attention';

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${log.date}</td>
                <td>${log.attendance}%</td>
                <td>${log.assignments}</td>
                <td>${log.unittests}</td>
                <td><strong>${finalEst}%</strong></td>
                <td><span class="status-badge ${catEst.toLowerCase().replace(" ", "-")}">${catEst}</span></td>
            `;
            historyTBody.appendChild(tr);
        });

        // Populate teacher comments list
        const commentsList = document.getElementById('tmodal-comments-list');
        commentsList.innerHTML = '';

        if (remarks.length === 0) {
            commentsList.innerHTML = `<li style="color: var(--text-muted); font-size: 0.9rem;">No topic-wise remarks logged for this student.</li>`;
        } else {
            remarks.forEach(rem => {
                const li = document.createElement('li');
                li.style.marginBottom = '12px';
                li.style.borderBottom = '1px solid var(--glass-border)';
                li.style.paddingBottom = '8px';
                li.innerHTML = `
                    <div style="display:flex; justify-content:space-between; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 4px;">
                        <span>Topic: <strong class="text-orange">${rem.topic}</strong> (${rem.date})</span>
                        <span class="status-badge ${rem.status === 'needs-improvement' ? 'needs-attention' : 'excellent'}" style="padding:1px 6px; font-size:0.65rem;">${rem.status.replace("-", " ")}</span>
                    </div>
                    <p style="font-size:0.925rem; color: var(--text-secondary);">${rem.comment}</p>
                `;
                commentsList.appendChild(li);
            });
        }

        teacherStudentDetailModal.style.display = 'flex';
    }

    if (teacherModalCloseBtn) {
        teacherModalCloseBtn.onclick = () => {
            teacherStudentDetailModal.style.display = 'none';
        };
    }
    window.addEventListener('click', (e) => {
        if (e.target === teacherStudentDetailModal) {
            teacherStudentDetailModal.style.display = 'none';
        }
    });


    /* ==========================================
       8. TEACHER: SUBJECT EVALUATION ENGINE
       ========================================== */
    const tEvalStudentSelect = document.getElementById('teval-student-select');
    const tevalSliders = [
        { id: 'teval-attendance', displayId: 'val-teval-attendance', suffix: '%' },
        { id: 'teval-assignments', displayId: 'val-teval-assignments', suffix: '' },
        { id: 'teval-unittests', displayId: 'val-teval-unittests', suffix: '' },
        { id: 'teval-practicals', displayId: 'val-teval-practicals', suffix: '' },
        { id: 'teval-participation', displayId: 'val-teval-participation', suffix: '' }
    ];
    const tevalForm = document.getElementById('teval-form');

    function loadTeacherPredictorTab(teacherUser) {
        const subject = teacherUser.subject;
        const students = getStudentsDB();

        document.getElementById('teval-subject-title').textContent = subject;

        // Student dropdown options
        tEvalStudentSelect.innerHTML = '<option value="" disabled selected>Choose a student...</option>';
        students.forEach(s => {
            const opt = document.createElement('option');
            opt.value = s.id;
            opt.textContent = s.name;
            tEvalStudentSelect.appendChild(opt);
        });

        // Initialize Slider value listeners
        tevalSliders.forEach(slider => {
            const el = document.getElementById(slider.id);
            const val = document.getElementById(slider.displayId);
            if (el && val) {
                el.addEventListener('input', (e) => {
                    val.textContent = `${e.target.value}${slider.suffix}`;
                });
            }
        });

        // Autofill defaults on selecting student
        tEvalStudentSelect.onchange = () => {
            const studentId = tEvalStudentSelect.value;
            const student = students.find(s => s.id === studentId);
            if (student) {
                const subBlock = student.subjects.find(sub => sub.name === subject);
                if (subBlock) {
                    document.getElementById('teval-attendance').value = subBlock.attendance;
                    document.getElementById('val-teval-attendance').textContent = subBlock.attendance + '%';
                    
                    document.getElementById('teval-assignments').value = subBlock.assignments;
                    document.getElementById('val-teval-assignments').textContent = subBlock.assignments;

                    document.getElementById('teval-unittests').value = subBlock.unittests;
                    document.getElementById('val-teval-unittests').textContent = subBlock.unittests;

                    // Set standard practical and classroom defaults
                    document.getElementById('teval-practicals').value = 75;
                    document.getElementById('val-teval-practicals').textContent = '75';
                    document.getElementById('teval-participation').value = 70;
                    document.getElementById('val-teval-participation').textContent = '70';
                }
                
                document.getElementById('teval-result-placeholder').style.display = 'flex';
                document.getElementById('teval-result-card').style.display = 'none';
            }
        };
    }

    if (tevalForm) {
        tevalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const studentId = tEvalStudentSelect.value;
            const teacherUser = JSON.parse(sessionStorage.getItem('activeUser'));
            const subject = teacherUser.subject;

            if (!studentId) {
                alert("Please select a student profile.");
                return;
            }

            const attendance = parseFloat(document.getElementById('teval-attendance').value);
            const assignments = parseFloat(document.getElementById('teval-assignments').value);
            const unittests = parseFloat(document.getElementById('teval-unittests').value);
            const practicals = parseFloat(document.getElementById('teval-practicals').value);
            const participation = parseFloat(document.getElementById('teval-participation').value);

            // Predict Formula
            const score = (attendance * 0.3) + (assignments * 0.2) + (unittests * 0.2) + (practicals * 0.15) + (participation * 0.15);
            const finalScore = Math.round(score);

            let category = '';
            let description = '';
            let cardClass = '';

            if (finalScore >= 80) {
                category = 'Excellent';
                description = `Great performance in ${subject}. Encourage advanced concepts.`;
                cardClass = 'excellent';
            } else if (finalScore >= 50) {
                category = 'Average';
                description = `Maintains base grades in ${subject}. Focus on weekly assignments.`;
                cardClass = 'average';
            } else {
                category = 'Needs Attention';
                description = `Failing risk in ${subject}. Assign remedial tutoring.`;
                cardClass = 'needs-attention';
            }

            // Update Predict Card UI
            document.getElementById('teval-result-label').textContent = category;
            document.getElementById('teval-result-score').textContent = `${finalScore}%`;
            document.getElementById('teval-result-desc').textContent = description;

            const resCard = document.getElementById('teval-result-card');
            resCard.className = 'demo-result-card';
            resCard.classList.add(cardClass);

            document.getElementById('teval-result-placeholder').style.display = 'none';
            resCard.style.display = 'flex';

            // Save Draft action
            const tevalDraftBtn = document.getElementById('teval-draft-btn');
            const tevalFinalizeBtn = document.getElementById('teval-finalize-btn');

            if (tevalDraftBtn) {
                tevalDraftBtn.onclick = () => {
                    const db = getStudentsDB();
                    const sIndex = db.findIndex(s => s.id === studentId);
                    
                    if (sIndex > -1) {
                        const today = new Date().toISOString().split('T')[0];
                        
                        // Update matching subject profile grades (draft mode - no notification)
                        const subIndex = db[sIndex].subjects.findIndex(sub => sub.name === subject);
                        if (subIndex > -1) {
                            db[sIndex].subjects[subIndex].attendance = attendance;
                            db[sIndex].subjects[subIndex].assignments = assignments;
                            db[sIndex].subjects[subIndex].unittests = unittests;
                            db[sIndex].subjects[subIndex].marks = finalScore;
                        }

                        setStudentsDB(db);
                        alert("Grades saved as draft. Students and parents have not been notified yet.");
                    }
                };
            }

            if (tevalFinalizeBtn) {
                tevalFinalizeBtn.onclick = () => {
                    const db = getStudentsDB();
                    const sIndex = db.findIndex(s => s.id === studentId);
                    
                    if (sIndex > -1) {
                        const today = new Date().toISOString().split('T')[0];
                        
                        // 1. Update matching subject profile grades
                        const subIndex = db[sIndex].subjects.findIndex(sub => sub.name === subject);
                        if (subIndex > -1) {
                            db[sIndex].subjects[subIndex].attendance = attendance;
                            db[sIndex].subjects[subIndex].assignments = assignments;
                            db[sIndex].subjects[subIndex].unittests = unittests;
                            db[sIndex].subjects[subIndex].marks = finalScore;
                        }

                        // 2. Append to general history evaluation logs
                        db[sIndex].history.push({
                            date: today,
                            attendance: attendance,
                            assignments: assignments,
                            unittests: unittests,
                            practicals: practicals,
                            participation: participation,
                            score: finalScore,
                            category: category
                        });

                        // 3. Recalculate average prediction score across all subjects
                        const overallScore = Math.round(db[sIndex].subjects.reduce((sum, s) => sum + s.marks, 0) / db[sIndex].subjects.length);
                        const overallCat = overallScore >= 80 ? 'Excellent' : overallScore >= 50 ? 'Average' : 'Needs Attention';
                        db[sIndex].currentPrediction = { score: overallScore, category: overallCat };

                        setStudentsDB(db);

                        // 4. Notifications publisher triggers
                        const publishNotifyChecked = document.getElementById('publish-notify-check').checked;
                        if (publishNotifyChecked) {
                            const notifications = getNotificationsDB();
                            notifications.push({
                                id: `not_${Date.now()}`,
                                studentId: studentId,
                                title: `Grade Update: ${subject}`,
                                message: `${teacherUser.name} has published new test grades, predict status, and suggestions for ${subject}. Please acknowledge.`,
                                date: today,
                                readByStudent: false,
                                readByParent: false
                            });
                            setNotificationsDB(notifications);
                            alert("Grades successfully finalized and notification alerts sent to student and parent!");
                        } else {
                            alert("Grades successfully finalized in student profile!");
                        }

                        // Reset form selectors
                        tevalForm.reset();
                        tEvalStudentSelect.value = "";
                        document.getElementById('teval-result-placeholder').style.display = 'flex';
                        resCard.style.display = 'none';
                    }
                };
            }
        });

        // Download CSV template for marks entry
        const downloadTemplateBtn = document.getElementById('download-marks-template');
        if (downloadTemplateBtn) {
            downloadTemplateBtn.onclick = () => {
                let csvContent = "data:text/csv;charset=utf-8,student_id,student_name,attendance,assignments,unittests,practicals,participation\n";
                students.forEach(student => {
                    const subBlock = student.subjects.find(sub => sub.name === subject);
                    if (subBlock) {
                        csvContent += `${student.id},${student.name},${subBlock.attendance},${subBlock.assignments},${subBlock.unittests},${subBlock.marks},70\n`;
                    }
                });

                const encodedUri = encodeURI(csvContent);
                const link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", `${subject}_marks_template.csv`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
        }

        // Upload CSV to update marks
        const uploadMarksInput = document.getElementById('upload-marks-csv');
        if (uploadMarksInput) {
            uploadMarksInput.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                
                reader.onload = function(evt) {
                    const text = evt.target.result;
                    const rows = text.split('\n');
                    
                    let updatedCount = 0;

                    // Loop rows skipping CSV header (row 0)
                    for (let i = 1; i < rows.length; i++) {
                        const cols = rows[i].split(',');
                        if (cols.length < 7) continue; // skip corrupted or empty rows

                        const studentId = cols[0].trim();
                        const attendance = parseInt(cols[2].trim());
                        const assignments = parseInt(cols[3].trim());
                        const unittests = parseInt(cols[4].trim());
                        const practicals = parseInt(cols[5].trim());
                        const participation = parseInt(cols[6].trim());

                        if (!studentId || isNaN(attendance)) continue;

                        const db = getStudentsDB();
                        const student = db.find(s => s.id === studentId);
                        if (student) {
                            const subIndex = student.subjects.findIndex(sub => sub.name === subject);
                            if (subIndex > -1) {
                                student.subjects[subIndex].attendance = attendance;
                                student.subjects[subIndex].assignments = assignments;
                                student.subjects[subIndex].unittests = unittests;
                                student.subjects[subIndex].marks = practicals;

                                // Recalculate overall prediction
                                const overallScore = Math.round(student.subjects.reduce((sum, s) => sum + s.marks, 0) / student.subjects.length);
                                const overallCat = overallScore >= 80 ? 'Excellent' : overallScore >= 50 ? 'Average' : 'Needs Attention';
                                student.currentPrediction = { score: overallScore, category: overallCat };

                                // Add to history
                                const today = new Date().toISOString().split('T')[0];
                                student.history.push({
                                    date: today,
                                    attendance: attendance,
                                    assignments: assignments,
                                    unittests: unittests,
                                    practicals: practicals,
                                    participation: participation,
                                    score: practicals,
                                    category: overallCat
                                });

                                setStudentsDB(db);
                                updatedCount += 1;
                            }
                        }
                    }

                    alert(`CSV uploaded successfully!\nUpdated marks for ${updatedCount} students in ${subject}.`);
                    
                    // Reset file selector
                    uploadMarksInput.value = '';
                };

                reader.readAsText(file);
            };
        }
    }


    /* ==========================================
       9. TEACHER: TOPIC-WISE REMARKS & ANALYSIS
       ========================================== */
    const remarkStudentSelect = document.getElementById('remark-student-select');
    const remarkTopicSelect = document.getElementById('remark-topic-select');
    const remarkForm = document.getElementById('remark-form');

    // Topic options mapping dynamically by subject
    const subjectTopicsMap = {
        'Mathematics': ['Calculus', 'Algebra', 'Trigonometry', 'Geometry'],
        'Science': ['Physics Mechanics', 'Organic Chemistry', 'Biology Physiology', 'Thermodynamics'],
        'English': ['Grammar Rules', 'Literature Analysis', 'Vocabulary Synthesis', 'Writing Rhetoric'],
        'Computer Science': ['Algorithms', 'Logic Design', 'OOP Structures', 'Database Normalization']
    };

    function loadTeacherRemarksTab(teacherUser) {
        const subject = teacherUser.subject;
        const students = getStudentsDB();

        document.getElementById('remarks-subject-indicator').textContent = subject;

        // 1. Populate student selector dropdown
        remarkStudentSelect.innerHTML = '<option value="" disabled selected>Choose student...</option>';
        students.forEach(s => {
            const opt = document.createElement('option');
            opt.value = s.id;
            opt.textContent = s.name;
            remarkStudentSelect.appendChild(opt);
        });

        // 2. Populate topics selector dropdown
        remarkTopicSelect.innerHTML = '<option value="" disabled selected>Choose topic...</option>';
        const topics = subjectTopicsMap[subject] || [];
        topics.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t;
            opt.textContent = t;
            remarkTopicSelect.appendChild(opt);
        });

        // 3. Render class-wide common weak topics analysis panel
        renderTopicAnalysisGrid(subject);
    }

    // Keyword Analysis and aggregation of remarks
    function renderTopicAnalysisGrid(subjectName) {
        const remarks = getRemarksDB().filter(r => r.subject === subjectName);
        const analysisBody = document.getElementById('remarks-analysis-body');
        analysisBody.innerHTML = '';

        if (remarks.length === 0) {
            analysisBody.innerHTML = `
                <div style="text-align: center; color: var(--text-muted); padding: 20px;">
                    No remarks logged yet to run keyword analysis.
                </div>`;
            return;
        }

        // Aggregate remarks count grouped by Topic
        const topicCounts = {};
        remarks.forEach(rem => {
            if (!topicCounts[rem.topic]) {
                topicCounts[rem.topic] = { total: 0, weak: 0 };
            }
            topicCounts[rem.topic].total += 1;
            
            // Increment weak count if comment targets improvements
            const keywords = ['struggling', 'weak', 'fails', 'focus', 'poor', 'improve', 'difficulty', 'needs work', 'lagging'];
            const containsWeakKeyword = keywords.some(k => rem.comment.toLowerCase().includes(k));
            
            if (rem.status === 'needs-improvement' || containsWeakKeyword) {
                topicCounts[rem.topic].weak += 1;
            }
        });

        // Generate progress bars list
        Object.keys(topicCounts).forEach(topic => {
            const data = topicCounts[topic];
            const percent = Math.round((data.weak / data.total) * 100);

            const div = document.createElement('div');
            div.style.marginBottom = '16px';
            div.innerHTML = `
                <div style="display:flex; justify-content:space-between; font-size:0.9rem; margin-bottom: 4px;">
                    <span>Topic: <strong>${topic}</strong></span>
                    <span class="text-orange" style="font-weight:700;">${percent}% Students Flagged (${data.weak}/${data.total})</span>
                </div>
                <div style="height:6px; background: var(--bg-tertiary); border-radius:3px; overflow:hidden;">
                    <div style="width: ${percent}%; height:100%; background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);"></div>
                </div>
            `;
            analysisBody.appendChild(div);
        });
    }

    // Submit Remark Log
    if (remarkForm) {
        remarkForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const teacherUser = JSON.parse(sessionStorage.getItem('activeUser'));
            
            const studentId = remarkStudentSelect.value;
            const topicSelect = remarkTopicSelect.value;
            const topicCustom = document.getElementById('remark-topic-custom').value.trim();
            const topic = topicCustom || topicSelect;
            const status = document.getElementById('remark-status-select').value;
            const comment = document.getElementById('remark-comment-textarea').value.trim();
            const today = new Date().toISOString().split('T')[0];

            if (!studentId || !topic) {
                alert("Please select student and enter/select a topic.");
                return;
            }

            const remarks = getRemarksDB();
            remarks.push({
                id: `rem_${Date.now()}`,
                studentId: studentId,
                subject: teacherUser.subject,
                teacher: teacherUser.name,
                date: today,
                topic: topic,
                status: status,
                comment: comment
            });

            setRemarksDB(remarks);
            alert("Topic-wise comments successfully logged and analyzed!");
            remarkForm.reset();
            
            // Reload Analysis display
            renderTopicAnalysisGrid(teacherUser.subject);
        });
    }


    /* ==========================================
       10. ADMIN: PERFORMANCE ANALYTICS MATRIX
       ========================================== */
    const adminTotalStudents = document.getElementById('admin-total-students');
    const adminAtRiskStudents = document.getElementById('admin-at-risk-students');
    const adminConfirmationsCount = document.getElementById('admin-confirmations-count');
    const adminAnalyticsTable = document.getElementById('admin-analytics-table-body');

    function loadAdminDashboardTab() {
        const students = getStudentsDB();
        const confirmations = getConfirmationsDB();

        // Summary metric counts
        adminTotalStudents.textContent = students.length;
        adminAtRiskStudents.textContent = students.filter(s => s.currentPrediction.category === 'Needs Attention').length;
        adminConfirmationsCount.textContent = confirmations.length;

        // Calculate average attendance across all students and subjects
        let totalAttendance = 0;
        let attendanceCount = 0;
        students.forEach(student => {
            student.subjects.forEach(sub => {
                if (sub.attendance > 0) {
                    totalAttendance += sub.attendance;
                    attendanceCount += 1;
                }
            });
        });
        const avgAttendance = attendanceCount > 0 ? Math.round(totalAttendance / attendanceCount) : 0;
        document.getElementById('admin-avg-attendance').textContent = `${avgAttendance}%`;

        // Draw attendance trend chart
        drawAdminAttendanceChart(students);

        // Populate Matrix analysis table (Subject averages, Teacher names, risk flags)
        const subjectAnalysisMap = {};

        students.forEach(student => {
            student.subjects.forEach(sub => {
                const key = `${sub.name} (${sub.teacher})`;
                if (!subjectAnalysisMap[key]) {
                    subjectAnalysisMap[key] = {
                        name: sub.name,
                        teacher: sub.teacher,
                        totalScore: 0,
                        count: 0,
                        flaggedCount: 0
                    };
                }

                subjectAnalysisMap[key].totalScore += sub.marks;
                subjectAnalysisMap[key].count += 1;
                
                if (sub.marks < 60) {
                    subjectAnalysisMap[key].flaggedCount += 1;
                }
            });
        });

        adminAnalyticsTable.innerHTML = '';
        
        Object.keys(subjectAnalysisMap).forEach(key => {
            const data = subjectAnalysisMap[key];
            const avg = Math.round(data.totalScore / data.count);

            const badgeAlert = data.flaggedCount > 0 
                ? `<span class="status-badge needs-attention" style="padding: 2px 8px; font-size: 0.75rem;">${data.flaggedCount} Flagged</span>`
                : `<span class="status-badge excellent" style="padding: 2px 8px; font-size: 0.75rem;">Healthy</span>`;

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${data.name}</strong></td>
                <td>${data.teacher}</td>
                <td>
                    <div style="display:flex; align-items:center; gap: 8px;">
                        <span style="font-weight:700;">${avg}%</span>
                        <div style="flex-grow:1; height:6px; background:var(--bg-tertiary); border-radius:3px; max-width:80px; overflow:hidden;">
                            <div style="width: ${avg}%; height:100%; background:var(--accent-gradient);"></div>
                        </div>
                    </div>
                </td>
                <td>${badgeAlert}</td>
            `;
            adminAnalyticsTable.appendChild(tr);
        });

        // Populate Student-wise Analysis Predictions
        const studentPredictionsBody = document.getElementById('admin-student-predictions-body');
        studentPredictionsBody.innerHTML = '';

        students.forEach(student => {
            const score = student.currentPrediction.score;
            const category = student.currentPrediction.category;
            
            // Calculate trend based on history
            let trend = 'Stable';
            let trendIcon = 'fa-minus';
            if (student.history.length >= 2) {
                const latest = student.history[student.history.length - 1].score;
                const previous = student.history[student.history.length - 2].score;
                if (latest > previous + 5) {
                    trend = 'Improving';
                    trendIcon = 'fa-arrow-up text-green';
                } else if (latest < previous - 5) {
                    trend = 'Declining';
                    trendIcon = 'fa-arrow-down text-red';
                }
            }

            // Generate recommendation based on category
            let recommendation = '';
            if (category === 'Excellent') {
                recommendation = 'Consider advanced placement or peer tutoring opportunities.';
            } else if (category === 'Average') {
                recommendation = 'Focus on consistent assignment completion and attendance.';
            } else {
                recommendation = 'Immediate intervention required: Schedule remedial sessions.';
            }

            const categoryClass = category.toLowerCase().replace(" ", "-");
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${student.name}</strong></td>
                <td><span style="font-weight:700;">${score}%</span></td>
                <td><span class="status-badge ${categoryClass}" style="padding:2px 8px; font-size:0.75rem;">${category}</span></td>
                <td><i class="fas ${trendIcon}" style="margin-right:4px;"></i> ${trend}</td>
                <td style="font-size:0.85rem; color:var(--text-secondary);">${recommendation}</td>
            `;
            studentPredictionsBody.appendChild(tr);
        });

        // Export functionality for Subject Analytics
        const exportSubjectBtn = document.getElementById('export-subject-analytics');
        if (exportSubjectBtn) {
            exportSubjectBtn.onclick = () => {
                const subjectAnalysisMap = {};
                students.forEach(student => {
                    student.subjects.forEach(sub => {
                        const key = `${sub.name} (${sub.teacher})`;
                        if (!subjectAnalysisMap[key]) {
                            subjectAnalysisMap[key] = {
                                name: sub.name,
                                teacher: sub.teacher,
                                totalScore: 0,
                                count: 0,
                                flaggedCount: 0
                            };
                        }
                        subjectAnalysisMap[key].totalScore += sub.marks;
                        subjectAnalysisMap[key].count += 1;
                        if (sub.marks < 60) {
                            subjectAnalysisMap[key].flaggedCount += 1;
                        }
                    });
                });

                let csvContent = "data:text/csv;charset=utf-8,Subject Name,Assigned Teacher,Class Average Score,Risk Warnings\n";
                Object.keys(subjectAnalysisMap).forEach(key => {
                    const data = subjectAnalysisMap[key];
                    const avg = Math.round(data.totalScore / data.count);
                    csvContent += `${data.name},${data.teacher},${avg}%,${data.flaggedCount}\n`;
                });

                const encodedUri = encodeURI(csvContent);
                const link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", "subject_analytics.csv");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
        }

        // Export functionality for Student Predictions
        const exportStudentBtn = document.getElementById('export-student-predictions');
        if (exportStudentBtn) {
            exportStudentBtn.onclick = () => {
                let csvContent = "data:text/csv;charset=utf-8,Student Name,Overall Score,Predicted Category,Trend,Recommendation\n";
                students.forEach(student => {
                    const score = student.currentPrediction.score;
                    const category = student.currentPrediction.category;
                    
                    let trend = 'Stable';
                    if (student.history.length >= 2) {
                        const latest = student.history[student.history.length - 1].score;
                        const previous = student.history[student.history.length - 2].score;
                        if (latest > previous + 5) trend = 'Improving';
                        else if (latest < previous - 5) trend = 'Declining';
                    }

                    let recommendation = '';
                    if (category === 'Excellent') {
                        recommendation = 'Consider advanced placement or peer tutoring opportunities.';
                    } else if (category === 'Average') {
                        recommendation = 'Focus on consistent assignment completion and attendance.';
                    } else {
                        recommendation = 'Immediate intervention required: Schedule remedial sessions.';
                    }

                    csvContent += `${student.name},${score}%,${category},${trend},"${recommendation}"\n`;
                });

                const encodedUri = encodeURI(csvContent);
                const link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", "student_predictions.csv");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
        }
    }

    function drawAdminAttendanceChart(students) {
        const chartWrapper = document.getElementById('admin-attendance-chart');
        if (!chartWrapper) return;
        chartWrapper.innerHTML = '';

        // Calculate attendance distribution
        const attendanceRanges = {
            '90-100%': 0,
            '80-89%': 0,
            '70-79%': 0,
            '60-69%': 0,
            'Below 60%': 0
        };

        students.forEach(student => {
            student.subjects.forEach(sub => {
                if (sub.attendance >= 90) attendanceRanges['90-100%']++;
                else if (sub.attendance >= 80) attendanceRanges['80-89%']++;
                else if (sub.attendance >= 70) attendanceRanges['70-79%']++;
                else if (sub.attendance >= 60) attendanceRanges['60-69%']++;
                else attendanceRanges['Below 60%']++;
            });
        });

        const maxCount = Math.max(...Object.values(attendanceRanges));
        const labels = Object.keys(attendanceRanges);
        const values = Object.values(attendanceRanges);

        const width = 600;
        const height = 200;
        const padding = 40;
        const barWidth = (width - padding * 2) / labels.length - 20;

        let svgContent = `<svg width="100%" height="100%" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">`;

        // Draw bars
        labels.forEach((label, index) => {
            const x = padding + index * (barWidth + 20);
            const barHeight = maxCount > 0 ? (values[index] / maxCount) * (height - padding * 2) : 0;
            const y = height - padding - barHeight;

            const color = index === 0 ? '#10b981' : index === 1 ? '#3b82f6' : index === 2 ? '#f59e0b' : index === 3 ? '#f97316' : '#ef4444';

            svgContent += `
                <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" fill="${color}" rx="4" />
                <text x="${x + barWidth / 2}" y="${y - 8}" fill="var(--text-primary)" font-size="12" font-weight="bold" font-family="sans-serif" text-anchor="middle">${values[index]}</text>
                <text x="${x + barWidth / 2}" y="${height - 10}" fill="var(--text-muted)" font-size="10" font-family="sans-serif" text-anchor="middle">${label}</text>
            `;
        });

        // Draw axis lines
        svgContent += `
            <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="var(--glass-border)" stroke-width="2" />
            <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" stroke="var(--glass-border)" stroke-width="2" />
        `;

        svgContent += `</svg>`;
        chartWrapper.innerHTML = svgContent;
    }


    /* ==========================================
       11. ADMIN: APPRECIATIONS & RECOMMENDATIONS HUB
       ========================================== */
    function loadAdminAppreciationsTab() {
        const students = getStudentsDB();
        const container = document.getElementById('admin-appreciations-list');
        container.innerHTML = '';

        let generatedNotesCount = 0;

        students.forEach(student => {
            student.subjects.forEach(sub => {
                // Generate Appreciation notice if score is >= 80%
                if (sub.marks >= 80) {
                    generatedNotesCount += 1;
                    const card = document.createElement('div');
                    card.className = 'glass-card';
                    card.style.padding = '24px';
                    card.style.marginBottom = '20px';
                    card.style.borderLeft = '4px solid var(--color-excellent)';

                    // Extract random mock topic comment if available from remarks table
                    const matchingRemark = getRemarksDB().find(r => r.studentId === student.id && r.subject === sub.name);
                    const topicStr = matchingRemark ? matchingRemark.topic : 'Core Concepts';

                    card.innerHTML = `
                        <div style="display:flex; justify-content:space-between; margin-bottom: 12px; border-bottom:1px solid var(--glass-border); padding-bottom: 8px;">
                            <div>
                                <h4 style="font-size: 1.15rem; color: var(--color-excellent);"><i class="fas fa-certificate"></i> Performance Appreciation Notice</h4>
                                <span style="font-size: 0.8rem; color: var(--text-muted);">Subject: <strong>${sub.name}</strong> | Teacher: ${sub.teacher}</span>
                            </div>
                            <span class="status-badge excellent" style="font-size:0.75rem;">Score: ${sub.marks}%</span>
                        </div>
                        <p style="color:var(--text-secondary); font-size:0.95rem; margin-bottom: 12px; line-height: 1.5;">
                            The system officially recognizes student <strong>${student.name}</strong> and instructor <strong>${sub.teacher}</strong> for demonstrating outstanding results in **${sub.name}** during continuous evaluations (Topic: **${topicStr}**).
                        </p>
                        <div style="background:var(--bg-primary); padding:12px; border-radius:var(--border-radius-sm); font-size: 0.85rem; border:1px solid var(--glass-border);">
                            <span style="font-weight:700; color: var(--accent-purple); text-transform:uppercase; font-size:0.75rem; display:block; margin-bottom:4px;">Recommended Next Goal</span>
                            Enroll student as a peer tutor in collaborative study sessions. Focus next on advanced application workshops and research projects.
                        </div>
                    `;
                    container.appendChild(card);
                }
            });
        });

        if (generatedNotesCount === 0) {
            container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 30px;">No student records currently score above the 80% appreciation threshold.</div>`;
        }
    }


    /* ==========================================
       12. ADMIN: USER MANAGEMENT (CSV TEMPLATE & UPLOADS)
       ========================================== */
    const downloadCsvTemplateBtn = document.getElementById('download-csv-template');
    const uploadCsvInput = document.getElementById('upload-csv-input');
    const usersTableBody = document.getElementById('users-table-body');

    function loadAdminUsersTab() {
        renderUsersDirectoryTable();

        // Search functionality
        const adminUsersSearch = document.getElementById('admin-users-search');
        if (adminUsersSearch) {
            adminUsersSearch.oninput = (e) => {
                renderUsersDirectoryTable(e.target.value.toLowerCase().trim());
            };
        }

        // 1. Download formatted CSV Template
        downloadCsvTemplateBtn.onclick = () => {
            const csvContent = "data:text/csv;charset=utf-8,role,name,username,password,parentUsername,subject\n"
                + "student,Alice Baker,alice,alice123,parent_alice,\n"
                + "parent,Alice Parent,parent_alice,parent_alice123,,\n"
                + "teacher,Dr. Green,green,green123,,English\n"
                + "student,Bob Carter,bob,bob123,parent_bob,\n"
                + "parent,Bob Parent,parent_bob,parent_bob123,,";
            
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "predictor_user_template.csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        // 2. Read and parse uploaded CSV file
        uploadCsvInput.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            
            reader.onload = function(evt) {
                const text = evt.target.result;
                const rows = text.split('\n');
                
                let studentsCreated = 0;
                let parentsCreated = 0;
                let teachersCreated = 0;

                const customUsers = getCustomUsersDB();
                const students = getStudentsDB();

                // Loop rows skipping CSV header (row 0)
                for (let i = 1; i < rows.length; i++) {
                    const cols = rows[i].split(',');
                    if (cols.length < 4) continue; // skip corrupted or empty rows

                    const role = cols[0].trim();
                    const name = cols[1].trim();
                    const username = cols[2].trim();
                    const password = cols[3].trim();
                    const parentUsername = cols[4] ? cols[4].trim() : '';
                    const subject = cols[5] ? cols[5].trim() : 'Mathematics';

                    if (!role || !name || !username || !password) continue;

                    // Skip duplicate usernames
                    const duplicateCheck = customUsers.find(u => u.username === username);
                    const duplicateCheckStd = students.find(s => s.username === username || s.parentUsername === username);
                    if (duplicateCheck || duplicateCheckStd) continue;

                    // Append user credentials profile to customUsersDB
                    customUsers.push({
                        role: role,
                        name: name,
                        username: username,
                        password: password,
                        parentUsername: parentUsername,
                        subject: subject
                    });

                    // If student role, create a matching student metrics row in the database
                    if (role === 'student' || role === 'Student') {
                        studentsCreated += 1;
                        students.push({
                            id: username,
                            name: name,
                            username: username,
                            parentUsername: parentUsername,
                            currentPrediction: { score: 0, category: "Average" },
                            history: [],
                            subjects: [
                                { name: "Mathematics", marks: 0, teacher: "Mr. Sharma", attendance: 0, assignments: 0, unittests: 0 },
                                { name: "Science", marks: 0, teacher: "Mrs. Verma", attendance: 0, assignments: 0, unittests: 0 },
                                { name: "English", marks: 0, teacher: "Ms. Davis", attendance: 0, assignments: 0, unittests: 0 },
                                { name: "Computer Science", marks: 0, teacher: "Alex Morgan", attendance: 0, assignments: 0, unittests: 0 }
                            ],
                            parentReports: { dayWise: [], weekly: [], monthly: [], annual: [] }
                        });
                    } else if (role === 'parent' || role === 'Parent') {
                        parentsCreated += 1;
                    } else if (role === 'teacher' || role === 'Teacher') {
                        teachersCreated += 1;
                    }
                }

                // Save modifications back to browser DB
                setCustomUsersDB(customUsers);
                setStudentsDB(students);

                alert(`CSV uploaded successfully!\nParsed profiles created:\nStudents: ${studentsCreated}\nParents: ${parentsCreated}\nTeachers: ${teachersCreated}`);
                
                // Reset file selector & refresh directory list view
                uploadCsvInput.value = '';
                renderUsersDirectoryTable();
            };

            reader.readAsText(file);
        };
    }

    function renderUsersDirectoryTable(filterText = '') {
        usersTableBody.innerHTML = '';

        // Add standard static accounts first
        const staticUsers = [
            { role: 'Admin', name: 'System Admin', username: 'admin', subject: '-', isStatic: true },
            { role: 'Teacher', name: 'Mr. Sharma', username: 'mr_sharma', subject: 'Mathematics', isStatic: true },
            { role: 'Teacher', name: 'Mrs. Verma', username: 'mrs_verma', subject: 'Science', isStatic: true },
            { role: 'Teacher', name: 'Ms. Davis', username: 'ms_davis', subject: 'English', isStatic: true },
            { role: 'Teacher', name: 'Alex Morgan', username: 'alex', subject: 'Computer Science', isStatic: true }
        ];

        // Standard student profiles
        const students = getStudentsDB();
        students.forEach(s => {
            staticUsers.push({ role: 'Student', name: s.name, username: s.username, subject: '-', isStatic: true });
            staticUsers.push({ role: 'Parent', name: s.name + "'s Parent", username: s.parentUsername, subject: '-', isStatic: true });
        });

        // Add custom parsed accounts
        const customUsers = getCustomUsersDB();
        const allUsers = [...staticUsers, ...customUsers];

        // Filter users based on search text
        const filteredUsers = filterText 
            ? allUsers.filter(u => 
                u.name.toLowerCase().includes(filterText) || 
                u.username.toLowerCase().includes(filterText) ||
                u.role.toLowerCase().includes(filterText)
            )
            : allUsers;

        filteredUsers.forEach((u, index) => {
            const tr = document.createElement('tr');
            const isCustom = !u.isStatic;
            tr.innerHTML = `
                <td><strong>${u.name}</strong></td>
                <td><span class="status-badge ${u.role.toLowerCase() === 'admin' ? 'excellent' : u.role.toLowerCase() === 'teacher' ? 'average' : 'needs-attention'}" style="padding:2px 8px; font-size:0.75rem;">${u.role}</span></td>
                <td><code>${u.username}</code></td>
                <td>${u.subject || '-'}</td>
                <td>
                    ${isCustom ? `
                        <button type="button" class="btn btn-secondary btn-sm edit-user-btn" data-index="${index}" style="padding: 4px 8px; font-size: 0.75rem; margin-right: 4px;">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button type="button" class="btn btn-secondary btn-sm delete-user-btn" data-index="${index}" style="padding: 4px 8px; font-size: 0.75rem; background: var(--card-red-bg); color: var(--color-attention);">
                            <i class="fas fa-trash"></i>
                        </button>
                    ` : '<span style="color: var(--text-muted); font-size: 0.8rem;">Static</span>'}
                </td>
            `;
            usersTableBody.appendChild(tr);
        });

        // Wire edit and delete buttons
        document.querySelectorAll('.edit-user-btn').forEach(btn => {
            btn.onclick = () => openUserEditModal(parseInt(btn.getAttribute('data-index')));
        });

        document.querySelectorAll('.delete-user-btn').forEach(btn => {
            btn.onclick = () => deleteUser(parseInt(btn.getAttribute('data-index')));
        });
    }

    // User Edit Modal Functions
    const userEditModal = document.getElementById('user-edit-modal');
    const userEditForm = document.getElementById('user-edit-form');
    const userModalClose = document.getElementById('user-modal-close');
    const editRoleSelect = document.getElementById('edit-user-role');
    const editSubjectGroup = document.getElementById('edit-subject-group');
    const editParentGroup = document.getElementById('edit-parent-group');

    function openUserEditModal(index) {
        const customUsers = getCustomUsersDB();
        const user = customUsers[index];
        if (!user) return;

        document.getElementById('edit-user-index').value = index;
        document.getElementById('edit-user-name').value = user.name;
        document.getElementById('edit-user-username').value = user.username;
        document.getElementById('edit-user-password').value = user.password || '';
        document.getElementById('edit-user-role').value = user.role;
        document.getElementById('edit-user-subject').value = user.subject || 'Mathematics';
        document.getElementById('edit-user-parent').value = user.parentUsername || '';

        // Show/hide fields based on role
        toggleUserEditFields(user.role);

        userEditModal.style.display = 'flex';
    }

    function toggleUserEditFields(role) {
        if (role === 'Teacher') {
            editSubjectGroup.style.display = 'block';
            editParentGroup.style.display = 'none';
        } else if (role === 'Student') {
            editSubjectGroup.style.display = 'none';
            editParentGroup.style.display = 'block';
        } else {
            editSubjectGroup.style.display = 'none';
            editParentGroup.style.display = 'none';
        }
    }

    if (editRoleSelect) {
        editRoleSelect.onchange = (e) => toggleUserEditFields(e.target.value);
    }

    if (userEditForm) {
        userEditForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const index = parseInt(document.getElementById('edit-user-index').value);
            const customUsers = getCustomUsersDB();
            const students = getStudentsDB();

            if (index >= 0 && index < customUsers.length) {
                const oldUser = customUsers[index];
                const newUsername = document.getElementById('edit-user-username').value;
                const newRole = document.getElementById('edit-user-role').value;
                const newParentUsername = document.getElementById('edit-user-parent').value;

                // Update custom user
                customUsers[index].name = document.getElementById('edit-user-name').value;
                customUsers[index].username = newUsername;
                customUsers[index].password = document.getElementById('edit-user-password').value;
                customUsers[index].role = newRole;
                customUsers[index].subject = document.getElementById('edit-user-subject').value;
                customUsers[index].parentUsername = newParentUsername;

                // If username changed, update student data
                if (oldUser.role === 'Student' && oldUser.username !== newUsername) {
                    const student = students.find(s => s.username === oldUser.username);
                    if (student) {
                        student.username = newUsername;
                        student.id = newUsername;
                        setStudentsDB(students);
                    }
                }

                // If parent username changed for student, update student data
                if (oldUser.role === 'Student' && oldUser.parentUsername !== newParentUsername) {
                    const student = students.find(s => s.username === newUsername);
                    if (student) {
                        student.parentUsername = newParentUsername;
                        setStudentsDB(students);
                    }
                }

                setCustomUsersDB(customUsers);
                alert('User updated successfully!');
                userEditModal.style.display = 'none';
                renderUsersDirectoryTable();
            }
        });
    }

    if (userModalClose) {
        userModalClose.onclick = () => userEditModal.style.display = 'none';
    }

    function deleteUser(index) {
        if (!confirm('Are you sure you want to delete this user?')) return;

        const customUsers = getCustomUsersDB();
        customUsers.splice(index, 1);
        setCustomUsersDB(customUsers);
        alert('User deleted successfully!');
        renderUsersDirectoryTable();
    }


    /* ==========================================
       13. CIRCULARS COMPOSER (ADMIN & TEACHER VIEW)
       ========================================== */
    const circularForm = document.getElementById('circular-form');
    const adminCircularsList = document.getElementById('admin-circulars-list');
    const teacherCircularsList = document.getElementById('teacher-circulars-list');

    function loadCircularComposerTab(user) {
        renderCircularsList(user);

        // Populate student dropdown for specific targeting
        const circularStudentSelect = document.getElementById('circular-student-select');
        if (circularStudentSelect) {
            const students = getStudentsDB();
            circularStudentSelect.innerHTML = '<option value="" disabled selected>Select student...</option>';
            students.forEach(s => {
                const opt = document.createElement('option');
                opt.value = s.id;
                opt.textContent = s.name;
                circularStudentSelect.appendChild(opt);
            });
        }

        // Handle target audience selection
        const circularTargetSelect = document.getElementById('circular-target-select');
        const circularClassGroup = document.getElementById('circular-class-group');
        const circularStudentGroup = document.getElementById('circular-student-group');

        if (circularTargetSelect) {
            circularTargetSelect.onchange = (e) => {
                const target = e.target.value;
                circularClassGroup.style.display = (target === 'specific-class') ? 'block' : 'none';
                circularStudentGroup.style.display = (target === 'specific-student' || target === 'specific-parent') ? 'block' : 'none';
            };
        }

        if (circularForm) {
            // Replace form submit listener to prevent duplicate bindings
            const newForm = circularForm.cloneNode(true);
            circularForm.parentNode.replaceChild(newForm, circularForm);

            newForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const title = document.getElementById('circular-title-input').value.trim();
                const content = document.getElementById('circular-content-textarea').value.trim();
                const target = document.getElementById('circular-target-select').value;
                const targetClass = document.getElementById('circular-class-select')?.value || 'all';
                const targetStudent = document.getElementById('circular-student-select')?.value || '';
                const today = new Date().toISOString().split('T')[0];

                if (!title || !content) {
                    alert("Please fill in both the title and circular text.");
                    return;
                }

                const circulars = getCircularsDB();
                circulars.push({
                    id: `circ_${Date.now()}`,
                    date: today,
                    author: user.name,
                    title: title,
                    content: content,
                    target: target,
                    targetClass: targetClass,
                    targetStudent: targetStudent
                });

                setCircularsDB(circulars);
                
                let targetMsg = '';
                if (target === 'entire-school') targetMsg = 'entire school';
                else if (target === 'specific-class') targetMsg = `class ${targetClass}`;
                else if (target === 'specific-student') targetMsg = 'specific student';
                else if (target === 'specific-parent') targetMsg = 'specific parent';
                
                alert(`Circular alert successfully published to ${targetMsg}!`);
                newForm.reset();
                
                // Refresh list view
                renderCircularsList(user);
            });
        }
    }

    function renderCircularsList(user) {
        const listContainer = user.role === 'Admin' ? adminCircularsList : teacherCircularsList;
        if (!listContainer) return;

        const circulars = getCircularsDB();
        listContainer.innerHTML = '';

        if (circulars.length === 0) {
            listContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No circular alerts have been composed.</div>`;
            return;
        }

        const sorted = [...circulars].reverse();

        sorted.forEach(circ => {
            const card = document.createElement('div');
            card.className = 'glass-card';
            card.style.padding = '20px';
            card.style.marginBottom = '16px';
            
            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom: 8px; border-bottom: 1px solid var(--glass-border); padding-bottom: 6px;">
                    <div>
                        <h4 style="font-size:1.1rem; color: var(--accent-blue);">${circ.title}</h4>
                        <span style="font-size:0.75rem; color:var(--text-muted);">By: ${circ.author}</span>
                    </div>
                    <span style="font-size: 0.8rem; color:var(--text-muted); font-weight:700;">${circ.date}</span>
                </div>
                <p style="color:var(--text-secondary); font-size:0.925rem; line-height: 1.4; white-space: pre-wrap;">${circ.content}</p>
            `;
            listContainer.appendChild(card);
        });
    }


    /* ==========================================
       14. STUDENT / PARENT INTERACTIVE GRIDS & RECOMMENDATIONS
       ========================================== */
    function loadStudentDashboardTab(studentId) {
        const student = getStudentsDB().find(s => s.id === studentId);
        if (!student) return;

        const score = student.currentPrediction.score;
        const category = student.currentPrediction.category;

        document.getElementById('stud-score').textContent = `${score}%`;
        document.getElementById('stud-category').textContent = category;
        
        const badge = document.getElementById('stud-status-badge');
        badge.className = `status-badge ${category.toLowerCase().replace(" ", "-")}`;
        badge.textContent = category;

        // Render Subject breakdown
        const subjectGrid = document.getElementById('stud-subject-grid');
        subjectGrid.innerHTML = '';

        student.subjects.forEach(sub => {
            const card = document.createElement('div');
            card.className = 'glass-card';
            card.style.padding = '20px';
            card.style.display = 'flex';
            card.style.flexDirection = 'column';
            card.style.gap = '10px';

            const scoreClass = sub.marks >= 80 ? 'text-green' : sub.marks >= 50 ? 'text-orange' : 'text-red';

            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: start;">
                    <div>
                        <h4 style="font-size: 1.1rem; margin-bottom: 2px;">${sub.name}</h4>
                        <span style="font-size: 0.8rem; color: var(--text-muted);">${sub.teacher}</span>
                    </div>
                    <span style="font-weight: 800; font-size: 1.25rem;" class="${scoreClass}">${sub.marks}%</span>
                </div>
                <div style="height: 6px; background: var(--bg-tertiary); border-radius: 3px; overflow: hidden; margin-top: 4px;">
                    <div style="width: ${sub.marks}%; height: 100%; background: var(--accent-gradient);"></div>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                    <span>Att: ${sub.attendance}%</span>
                    <span>Test: ${sub.unittests}/100</span>
                </div>
            `;
            subjectGrid.appendChild(card);
        });

        // Trigger history SVG trend chart
        drawHistoricalChart(student.history);
    }

    function drawHistoricalChart(history) {
        const chartWrapper = document.getElementById('stud-chart-wrapper');
        chartWrapper.innerHTML = '';

        if (history.length < 2) {
            chartWrapper.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--text-muted); font-size: 0.9rem;">
                    Insufficient history logs to plot graph.
                </div>`;
            return;
        }

        const width = 500;
        const height = 150;
        const padding = 20;
        const xStep = (width - padding * 2) / (history.length - 1);
        
        let pathD = '';
        let dots = '';
        let gridLines = '';
        let xLabels = '';

        history.forEach((log, index) => {
            const x = padding + index * xStep;
            const y = height - padding - ((log.score / 100) * (height - padding * 2));

            if (index === 0) pathD += `M ${x} ${y}`;
            else pathD += ` L ${x} ${y}`;

            dots += `<circle cx="${x}" cy="${y}" r="4" fill="var(--accent-purple)" stroke="#ffffff" stroke-width="1.5" />`;
            dots += `<text x="${x}" y="${y - 8}" fill="var(--text-primary)" font-size="8" font-weight="bold" font-family="sans-serif" text-anchor="middle">${log.score}%</text>`;
            
            const labelDate = log.date.slice(5);
            xLabels += `<text x="${x}" y="${height - 4}" fill="var(--text-muted)" font-size="8" font-family="sans-serif" text-anchor="middle">${labelDate}</text>`;
            gridLines += `<line x1="${x}" y1="${padding}" x2="${x}" y2="${height - padding}" stroke="var(--glass-border)" stroke-width="1" stroke-dasharray="2 2" />`;
        });

        const yTop = padding;
        const yBottom = height - padding;
        
        const svgContent = `
            <svg width="100%" height="100%" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
                <line x1="${padding}" y1="${yTop}" x2="${width - padding}" y2="${yTop}" stroke="var(--glass-border)" stroke-width="1" />
                <line x1="${padding}" y1="${yBottom}" x2="${width - padding}" y2="${yBottom}" stroke="var(--glass-border)" stroke-width="1" />
                ${gridLines}
                <path d="${pathD}" fill="none" stroke="var(--accent-gradient)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                ${dots}
                ${xLabels}
            </svg>
        `;
        chartWrapper.innerHTML = svgContent;
    }

    function loadStudentCoachTab(studentId) {
        const student = getStudentsDB().find(s => s.id === studentId);
        if (!student) return;

        const expertiseList = document.getElementById('coach-expertise-list');
        const weaknessList = document.getElementById('coach-weakness-list');
        const actionableList = document.getElementById('coach-actionable-list');

        expertiseList.innerHTML = '';
        weaknessList.innerHTML = '';
        actionableList.innerHTML = '';

        let strengths = [];
        let weaknesses = [];
        let actions = [];

        // Parse latest history indicators
        if (student.history.length > 0) {
            const latest = student.history[student.history.length - 1];
            if (latest.attendance < 75) {
                weaknesses.push(`Low Attendance (${latest.attendance}%): High risk warning.`);
                actions.push(`Attendance focus: Meet coordinators to resolve classes schedule overlapping.`);
            } else if (latest.attendance >= 90) {
                strengths.push(`Overall Attendance (${latest.attendance}%): Superb classroom regularity.`);
            }
            if (latest.participation < 60) {
                weaknesses.push(`Participation Level (${latest.participation}/100): Slow class contributions.`);
                actions.push(`Participation plan: Acknowledge slide summaries during lecture check-points.`);
            }
        }

        // Parse subjects parameters
        student.subjects.forEach(sub => {
            const matchingRemark = getRemarksDB().find(r => r.studentId === studentId && r.subject === sub.name);
            const topicName = matchingRemark ? matchingRemark.topic : 'Core Chapters';

            if (sub.marks >= 80) {
                strengths.push(`${sub.name} (${sub.marks}%): Strong expertise (Chapter: ${topicName}).`);
            } else if (sub.marks < 65) {
                weaknesses.push(`${sub.name} (${sub.marks}%): Flagged concept drop (Chapter: ${topicName}).`);
                actions.push(`Targeted revision: Re-submit exercises on **${topicName}** with **${sub.teacher}** for evaluation.`);
            }
        });

        if (strengths.length === 0) strengths.push("Performance scores stable across sections.");
        if (weaknesses.length === 0) {
            strengths.push("Excellent profile: No at-risk categories detected.");
            actions.push("Review advanced elective topics and self-paced projects.");
        }

        strengths.forEach(s => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check-circle text-green" style="margin-right:8px; margin-top:4px;"></i> <span>${s}</span>`;
            expertiseList.appendChild(li);
        });

        weaknesses.forEach(w => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-exclamation-triangle text-red" style="margin-right:8px; margin-top:4px;"></i> <span>${w}</span>`;
            weaknessList.appendChild(li);
        });

        actions.forEach(a => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-lightbulb text-orange" style="margin-right:8px; margin-top:4px;"></i> <span>${a}</span>`;
            actionableList.appendChild(li);
        });
    }

    function loadParentProgressTab(parentId) {
        const student = getStudentsDB().find(s => s.parentUsername === parentId || s.parentUsername === 'parent');
        if (!student) return;

        const score = student.currentPrediction.score;
        const category = student.currentPrediction.category;

        document.getElementById('parent-stud-name').textContent = student.name;
        document.getElementById('parent-stud-score').textContent = `${score}%`;
        document.getElementById('parent-stud-category').textContent = category;
        
        const badge = document.getElementById('parent-stud-status-badge');
        badge.className = `status-badge ${category.toLowerCase().replace(" ", "-")}`;
        badge.textContent = category;

        const parentSubjectGrid = document.getElementById('parent-subject-grid');
        parentSubjectGrid.innerHTML = '';

        student.subjects.forEach(sub => {
            const card = document.createElement('div');
            card.className = 'glass-card';
            card.style.padding = '20px';
            card.style.display = 'flex';
            card.style.flexDirection = 'column';
            card.style.gap = '10px';

            const scoreClass = sub.marks >= 80 ? 'text-green' : sub.marks >= 50 ? 'text-orange' : 'text-red';

            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: start;">
                    <div>
                        <h4 style="font-size: 1.1rem; margin-bottom: 2px;">${sub.name}</h4>
                        <span style="font-size: 0.8rem; color: var(--text-muted);">${sub.teacher}</span>
                    </div>
                    <span style="font-weight: 800; font-size: 1.25rem;" class="${scoreClass}">${sub.marks}%</span>
                </div>
                <div style="height: 6px; background: var(--bg-tertiary); border-radius: 3px; overflow: hidden; margin-top: 4px;">
                    <div style="width: ${sub.marks}%; height: 100%; background: var(--accent-gradient);"></div>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                    <span>Att: ${sub.attendance}%</span>
                    <span>Test: ${sub.unittests}/100</span>
                </div>
            `;
            parentSubjectGrid.appendChild(card);
        });
    }

    const parentReportLinks = document.querySelectorAll('.report-tab-btn');
    const parentReportTableHead = document.getElementById('parent-report-table-head');
    const parentReportTableBody = document.getElementById('parent-report-table-body');

    function loadParentReportsTab() {
        const activeUser = JSON.parse(sessionStorage.getItem('activeUser'));
        const student = getStudentsDB().find(s => s.parentUsername === activeUser.id || s.parentUsername === 'parent');
        if (!student) return;

        let currentFrequency = 'day';

        parentReportLinks.forEach(btn => {
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);

            newBtn.addEventListener('click', () => {
                parentReportLinks.forEach(b => b.classList.remove('active'));
                
                const finalButtons = document.querySelectorAll('.report-tab-btn');
                finalButtons.forEach(fb => {
                    if (fb.getAttribute('data-frequency') === newBtn.getAttribute('data-frequency')) {
                        fb.classList.add('active');
                    } else {
                        fb.classList.remove('active');
                    }
                });

                currentFrequency = newBtn.getAttribute('data-frequency');
                renderParentReportTable(student, currentFrequency);
            });
        });

        const defaultReportTab = document.querySelector('.report-tab-btn');
        if (defaultReportTab) {
            defaultReportTab.classList.add('active');
            renderParentReportTable(student, 'day');
        }

        // Export functionality for parent reports
        const exportParentBtn = document.getElementById('export-parent-reports');
        if (exportParentBtn) {
            exportParentBtn.onclick = () => {
                let csvContent = '';
                let filename = '';

                if (currentFrequency === 'day') {
                    csvContent = "data:text/csv;charset=utf-8,Date,Attendance Status,Class Participation,Teacher Behavioral Notes\n";
                    student.parentReports.dayWise.forEach(log => {
                        csvContent += `${log.date},${log.attendanceStatus},${log.activeParticipation},"${log.behavioralNote}"\n`;
                    });
                    filename = 'day_wise_reports.csv';
                } else if (currentFrequency === 'week') {
                    csvContent = "data:text/csv;charset=utf-8,Timeline Week,Average Attendance,Assignments Status,Weekly Performance Summary\n";
                    student.parentReports.weekly.forEach(log => {
                        csvContent += `${log.week},${log.avgAttendance},${log.assignmentsSubmitted},"${log.performanceSummary}"\n`;
                    });
                    filename = 'weekly_reports.csv';
                } else if (currentFrequency === 'month') {
                    csvContent = "data:text/csv;charset=utf-8,Academic Month,Mock Test Average,Teacher Consultation Needed,Progress Comments\n";
                    student.parentReports.monthly.forEach(log => {
                        csvContent += `${log.month},${log.testAverage},${log.parentConsultationNeeded},"${log.comments}"\n`;
                    });
                    filename = 'monthly_reports.csv';
                } else if (currentFrequency === 'year') {
                    csvContent = "data:text/csv;charset=utf-8,Academic Year,Cumulative GPA Projection,Model Risk Evaluation,Final Path Recommendations\n";
                    student.parentReports.annual.forEach(log => {
                        csvContent += `${log.year},${log.gradePointAverage},${log.riskEvaluation},"${log.finalRecommendation}"\n`;
                    });
                    filename = 'annual_reports.csv';
                }

                if (csvContent) {
                    const encodedUri = encodeURI(csvContent);
                    const link = document.createElement("a");
                    link.setAttribute("href", encodedUri);
                    link.setAttribute("download", filename);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else {
                    alert("No data available to export for this report type.");
                }
            };
        }
    }

    function renderParentReportTable(student, frequency) {
        parentReportTableHead.innerHTML = '';
        parentReportTableBody.innerHTML = '';

        if (frequency === 'day') {
            parentReportTableHead.innerHTML = `
                <tr>
                    <th>Date</th>
                    <th>Attendance Status</th>
                    <th>Class Participation</th>
                    <th>Teacher Behavioral Notes</th>
                </tr>
            `;

            student.parentReports.dayWise.forEach(log => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${log.date}</td>
                    <td><span class="status-badge ${log.attendanceStatus === 'Present' ? 'excellent' : 'needs-attention'}" style="padding: 2px 8px; font-size: 0.75rem;">${log.attendanceStatus}</span></td>
                    <td>${log.activeParticipation}</td>
                    <td style="color: var(--text-secondary); max-width: 300px; white-space: normal;">${log.behavioralNote}</td>
                `;
                parentReportTableBody.appendChild(tr);
            });
        } 
        else if (frequency === 'week') {
            parentReportTableHead.innerHTML = `
                <tr>
                    <th>Timeline Week</th>
                    <th>Average Attendance</th>
                    <th>Assignments Status</th>
                    <th>Weekly Performance Summary</th>
                </tr>
            `;

            student.parentReports.weekly.forEach(log => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><strong>${log.week}</strong></td>
                    <td>${log.avgAttendance}</td>
                    <td>${log.assignmentsSubmitted}</td>
                    <td style="color: var(--text-secondary); max-width: 300px; white-space: normal;">${log.performanceSummary}</td>
                `;
                parentReportTableBody.appendChild(tr);
            });
        } 
        else if (frequency === 'month') {
            parentReportTableHead.innerHTML = `
                <tr>
                    <th>Academic Month</th>
                    <th>Mock Test Average</th>
                    <th>Teacher Consultation Needed</th>
                    <th>Progress Comments</th>
                </tr>
            `;

            student.parentReports.monthly.forEach(log => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><strong>${log.month}</strong></td>
                    <td>${log.testAverage}</td>
                    <td><span class="status-badge ${log.parentConsultationNeeded === 'Yes' ? 'needs-attention' : 'excellent'}" style="padding: 2px 8px; font-size: 0.75rem;">${log.parentConsultationNeeded}</span></td>
                    <td style="color: var(--text-secondary); max-width: 300px; white-space: normal;">${log.comments}</td>
                `;
                parentReportTableBody.appendChild(tr);
            });
        } 
        else if (frequency === 'year') {
            parentReportTableHead.innerHTML = `
                <tr>
                    <th>Academic Year</th>
                    <th>Cumulative GPA Projection</th>
                    <th>Model Risk Evaluation</th>
                    <th>Final Path Recommendations</th>
                </tr>
            `;

            student.parentReports.annual.forEach(log => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><strong>${log.year}</strong></td>
                    <td><strong>${log.gradePointAverage}</strong></td>
                    <td><span class="status-badge ${log.riskEvaluation === 'Low Risk' ? 'excellent' : 'needs-attention'}" style="padding: 2px 8px; font-size: 0.75rem;">${log.riskEvaluation}</span></td>
                    <td style="color: var(--text-secondary); max-width: 300px; white-space: normal;">${log.finalRecommendation}</td>
                `;
                parentReportTableBody.appendChild(tr);
            });
        }
    }

    /* ==========================================
       15. FEEDBACK FORMS HANDLER
       ========================================== */
    function handleFeedbackSubmit(formElement, role) {
        if (!formElement) return;

        // Clone to prevent duplicate event listeners
        const newForm = formElement.cloneNode(true);
        formElement.parentNode.replaceChild(newForm, formElement);

        newForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const activeUser = JSON.parse(sessionStorage.getItem('activeUser'));
            const ratingVal = parseInt(newForm.querySelector('select[name="rating"]').value);
            const commentsVal = newForm.querySelector('textarea[name="comments"]').value.trim();
            const today = new Date().toISOString().split('T')[0];

            if (!commentsVal) {
                alert("Please add details.");
                return;
            }

            const db = getFeedbacksDB();
            db.push({
                role: role,
                name: activeUser.name,
                rating: ratingVal,
                date: today,
                comments: commentsVal
            });

            setFeedbacksDB(db);
            alert("Feedback successfully submitted!");
            newForm.reset();
        });
    }

    // Add feedback form handling to panel load triggers
    const originalTriggerPanelLoad = triggerPanelLoad;
    triggerPanelLoad = function(panelId) {
        const user = JSON.parse(sessionStorage.getItem('activeUser'));
        if (!user) return;

        switch (panelId) {
            case 'student-feedback':
                handleFeedbackSubmit(document.getElementById('student-feedback-form'), 'Student');
                break;
            case 'parent-feedback':
                handleFeedbackSubmit(document.getElementById('parent-feedback-form'), 'Parent');
                break;
        }

        // Call original function
        originalTriggerPanelLoad(panelId);
    };
});
