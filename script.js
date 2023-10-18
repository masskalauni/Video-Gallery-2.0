const btn = document.querySelector('.thumbnail');
        const videoContainer = document.querySelector('.video_container');
        
        btn.addEventListener('click', () => {
            videoContainer.classList.add('show');
        });

        function closeVideo() {
            videoContainer.classList.remove('show');
        }

        
        
        let overlay = null; // Define the overlay variable outside the functions to track its presence

        function toggleBlur() {
            // Create the overlay element if it doesn't exist
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'overlay';
                document.body.appendChild(overlay);
        
                // Apply blur to the entire body except the video container
                const bodyElements = document.querySelectorAll('body > :not(.video_container)');
                bodyElements.forEach(element => {
                    element.classList.add('blur');
                });
        
                // Toggle the visibility of the overlay
                overlay.onclick = function () {
                    bodyElements.forEach(element => {
                        element.classList.remove('blur');
                    });
                    overlay.remove();
                    overlay = null; // Reset the overlay
                };
            }
        
            const videoContainer = document.getElementById('videoContainer');
            videoContainer.style.display = 'block'; // Show the video container
        }
        
        function closeVideo() {
            const videoContainer = document.getElementById('videoContainer');
            
            // Hide the video container
            videoContainer.style.display = 'none';
            
            // Remove the overlay if it exists
            if (overlay) {
                const bodyElements = document.querySelectorAll('body > :not(.video_container)');
                bodyElements.forEach(element => {
                    element.classList.remove('blur');
                });
                overlay.remove();
                overlay = null; // Reset the overlay
            }
        }

        



        // video filtration

        $('.category-button').categoryFilter();

        
        
        
        