const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => observer.observe(section));

const navLinks = document.querySelectorAll('nav a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section').forEach(section => {
    const top = section.offsetTop - 150;
    if (scrollY >= top) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

function openModal(project) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");
  const content = {
    firecloud: `
      <h2>Fire Cloud – Cloud-based Live Test Execution Platform</h2>
      <h4>Role: Software Developer</h4>
      <ul>
        <li>Conducted R&D to build an optimized cloud setup, improving scalability and reducing latency.</li>
        <li>Developed real-time test monitoring with WebSockets and Janus WebRTC.</li>
        <li>Configured dedicated servers with optimal environments and networks.</li>
        <li>Handled DevOps: deployed JARs, automated deployments, monitored servers.</li>
        <li>Reduced infra costs by 70% while ensuring high availability and performance.</li>
      </ul>`,

    fireflink: `
      <h2>Fireflink – Scriptless Automation Testing Platform</h2>
      <h4>Role: Software Developer</h4>
      <ul>
        <li>Developed backend modules in Java, increasing test speed and lowering latency by 25%.</li>
        <li>Built cloud integration for orchestrating web, mobile, desktop, and API test execution.</li>
        <li>Integrated Jira, BrowserStack, and other tools for seamless DevOps integration.</li>
        <li>Contributed to a scalable architecture with high test load reliability.</li>
      </ul>`,

    pantaloons: `
      <h2>Pantaloons E-Commerce Web Application</h2>
      <h4>Role: Automation Test Engineer / Team Lead</h4>
      <ul>
        <li>Led a 6-member team to build a Selenium + TestNG-based framework from scratch.</li>
        <li>Designed and executed 100+ test cases covering functional, integration, and regression testing.</li>
        <li>Integrated BrowserStack for cross-browser/device UI testing.</li>
        <li>Improved defect detection rate by 60% via code reviews and test design best practices.</li>
      </ul>`
  };

  body.innerHTML = content[project] || '<p>No details available.</p>';
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  if (event.target === document.getElementById("modal")) {
    closeModal();
  }
};

function showSkillDetails(items, title) {
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '9999';

  const content = document.createElement('div');
  content.style.backgroundColor = '#fff';
  content.style.padding = '20px';
  content.style.borderRadius = '10px';
  content.style.maxWidth = '400px';
  content.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';

  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.position = 'fixed';
  closeBtn.style.top = '20px';
  closeBtn.style.right = '30px';
  closeBtn.style.fontSize = '28px';
  closeBtn.style.cursor = 'pointer';
  closeBtn.onclick = () => document.body.removeChild(modal);

  modal.addEventListener('click', function (e) {
    if (!content.contains(e.target)) {
      document.body.removeChild(modal);
    }
  });

  const ul = document.createElement('ul');
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });

  const heading = document.createElement('h3');
  heading.textContent = title;
  heading.style.marginTop = '0';
  heading.style.marginBottom = '10px';

  content.appendChild(closeBtn);
  content.appendChild(heading);
  content.appendChild(ul);
  modal.appendChild(content);
  document.body.appendChild(modal);
}
