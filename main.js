document.getElementById('start-btn').addEventListener('click', () => {
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');

    introScreen.classList.add('hidden');
    mainContent.classList.remove('hidden');
    mainContent.classList.add('fade-in');
    window.scrollTo(0, 0);
});

document.getElementById('project-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const financeOption = document.querySelector('input[name="finance"]:checked')?.value || 'No especificado';
    
    const reqsElements = document.querySelectorAll('input[name="req"]:checked');
    const reqsArray = Array.from(reqsElements).map(el => `• ${el.value}`);
    const reqsText = reqsArray.length > 0 ? reqsArray.join('\n') : '• Ninguno seleccionado';
    
    const description = document.getElementById('description').value;

    // Tu número exacto
    const phoneNumber = "593989200977"; 

    // Mensaje con emojis y formato Markdown de WhatsApp
    const message = `¡Hola Jair! Vengo de tu página web y estoy interesado en que me ayudes con un proyecto para mi negocio. 🚀\n\n` +
                    `*Financiamiento:* ${financeOption}\n\n` +
                    `*Requerimientos que me interesan:*\n${reqsText}\n\n` +
                    `*Descripción de mi idea:*\n"${description}"\n\n` +
                    `Me gustaría saber más sobre los costos y el proceso. ¡Quedo atento! ✨`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
});