/* ============================================================
   KUMO CRAFT BAKERY — JavaScript
   ============================================================ */

// --- Brochure Modal ---
function openBrochureModal() {
  document.getElementById('brochureModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBrochureModal() {
  document.getElementById('brochureModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on backdrop click
document.getElementById('brochureModal').addEventListener('click', function(e) {
  if (e.target === this) closeBrochureModal();
});

// --- Download: Cake Care Instructions ---
function downloadCareGuide() {
  const link = document.createElement('a');
  link.href = 'assets/cake_care_instructions.jpg';
  link.download = 'Kumo_Craft_Bakery_Cake_Care_Instructions.jpg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// --- Download: Brochure (downloads care card as stand-in) ---
function downloadBrochure() {
  const link = document.createElement('a');
  link.href = 'assets/kumo_brochure.jpg';
  link.download = 'Kumo_Craft_Bakery_Menu_Brochure.jpg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// --- Order now redirect ---
function orderNow() {
  window.open('https://forms.gle/afgwnnXkwxGztrP8A', '_blank');
}

// --- Smooth nav highlight on scroll ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--gold)';
    }
  });
}, { passive: true });

// --- Gallery: subtle entrance animation on scroll ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.gallery-item, .review-card, .quick-link-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
