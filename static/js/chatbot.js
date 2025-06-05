        document.addEventListener('DOMContentLoaded', function() {
            // Chat UI elements
            const chatbotIcon = document.getElementById('chatbotIcon');
            const chatbotContainer = document.getElementById('chatbotContainer');
            const closeChatbot = document.getElementById('closeChatbot');
            const chatMessages = document.getElementById('chatMessages');
            const userInput = document.getElementById('userInput');
            const sendButton = document.getElementById('sendButton');
            
            // Chat toggling
            chatbotIcon.addEventListener('click', toggleChat);
            closeChatbot.addEventListener('click', toggleChat);
            
            function toggleChat() {
                chatbotContainer.classList.toggle('visible');
            }
            
            // Chat functionality
            sendButton.addEventListener('click', sendMessage);
            userInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') sendMessage();
            });
            
            async function sendMessage() {
                const message = userInput.value.trim();
                if (!message) return;
                
                // Add user message
                addMessage('user', message);
                userInput.value = '';
                
                // Show typing indicator
                const typingIndicator = document.createElement('div');
                typingIndicator.className = 'typing-indicator';
                typingIndicator.innerHTML = `
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                `;
                chatMessages.appendChild(typingIndicator);
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                // Simulate API delay
                setTimeout(async () => {
                    // Remove typing indicator
                    chatMessages.removeChild(typingIndicator);
                    
                    // Get bot response
                    const response = await getBotResponse(message);
                    addMessage('bot', response);
                }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
            }
            
            function addMessage(sender, message) {
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${sender}`;
                messageDiv.textContent = message;
                chatMessages.appendChild(messageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            
            async function getBotResponse(message) {
                // In a real implementation, you would call your backend API here
                // For now, we'll use a sophisticated local response system
                
                const lowerMsg = message.toLowerCase();
                
                // Contact information responses
                if (lowerMsg.includes('telefoon') || lowerMsg.includes('nummer') || lowerMsg.includes('bellen')) {
                    return "U kunt ons bereiken op de volgende telefoonnummers:\n\n" +
                           "Klantenservice: 030 - 123 45 67\n" +
                           "Technische ondersteuning: 030 - 123 45 68\n" +
                           "Zakelijke contacten: 030 - 123 45 69\n\n" +
                           "Onze telefoonlijnen zijn bereikbaar van maandag t/m vrijdag tussen 08:30 en 17:00 uur.";
                }
                
                if (lowerMsg.includes('email') || lowerMsg.includes('mail')) {
                    return "U kunt ons emailen via:\n\n" +
                           "Algemene vragen: info@medifile.nl\n" +
                           "Technische ondersteuning: support@medifile.nl\n" +
                           "Zakelijke contacten: zakelijk@medifile.nl\n\n" +
                           "We streven ernaar binnen 1 werkdag te reageren.";
                }
                
                if (lowerMsg.includes('adres') || lowerMsg.includes('locatie') || lowerMsg.includes('kantoor') || lowerMsg.includes('waar')) {
                    return "Ons kantoor is gevestigd op:\n\n" +
                           "MediFile B.V.\n" +
                           "Malibaan 1\n" +
                           "3521 AB Utrecht\n" +
                           "Nederland\n\n" +
                           "Wilt u een routebeschrijving? Ik kan u helpen met de beste route vanaf uw locatie.";
                }
                
                if (lowerMsg.includes('openingstijd') || lowerMsg.includes('uur') || lowerMsg.includes('bereikbaar')) {
                    return "Onze openingstijden zijn:\n\n" +
                           "Maandag t/m vrijdag: 08:30 - 17:00\n" +
                           "Weekend: Gesloten\n\n" +
                           "Tijdens feestdagen zijn wij ook gesloten. Onze digitale diensten zijn 24/7 beschikbaar.";
                }
                
                // Greetings
                if (lowerMsg.includes('hallo') || lowerMsg.includes('hoi') || lowerMsg.includes('dag')) {
                    const greetings = [
                        "Hallo! Hoe kan ik u helpen?",
                        "Goedendag! Waarmee kan ik u van dienst zijn?",
                        "Hoi daar! Wat kan ik voor u doen?",
                        "Dag! Hoe kan ik u vandaag assisteren?"
                    ];
                    return greetings[Math.floor(Math.random() * greetings.length)];
                }
                
                // Thank you responses
                if (lowerMsg.includes('dank') || lowerMsg.includes('bedankt')) {
                    return "Graag gedaan! Is er nog iets anders waar ik u mee kan helpen?";
                }
                
                // Default responses
                const defaultResponses = [
                    "Ik begrijp uw vraag. Voor meer informatie kunt u terecht op onze website of contact opnemen met onze klantenservice.",
                    "Dank voor uw bericht. Ik heb uw vraag genoteerd en een collega neemt zo spoedig mogelijk contact met u op.",
                    "Interessante vraag! Laat me dat even voor u opzoeken... Helaas heb ik hier niet direct het antwoord op. Onze klantenservice kan u verder helpen via 030 - 123 45 67.",
                    "Excuses, ik begrijp uw vraag niet helemaal. Kunt u het anders formuleren?",
                    "Dat is een goede vraag! Voor specifieke informatie hierover raad ik aan om onze website te bezoeken of contact op te nemen tijdens kantooruren."
                ];
                
                return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
            }
            
            // Contact form handling
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.');
                    contactForm.reset();
                });
            }
        });