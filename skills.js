    function filterSkills(category) {
        const allSkills = document.querySelectorAll('.skill-item');
        allSkills.forEach(skill => {
            if (category === 'all' || skill.classList.contains(category)) {
                skill.classList.remove('hidden');
            } else {
                skill.classList.add('hidden');
            }
        });
    }
    function filterSkills(category) {
        const skillItems = document.querySelectorAll('.skill-item');
        const buttons = document.querySelectorAll('.filter-button');
    
        buttons.forEach(button => {
            button.classList.remove('active');
        });
    
        skillItems.forEach(item => {
            item.style.display = 'none';
        });
    
        if (category === 'all') {
            skillItems.forEach(item => {
                item.style.display = 'block';
            });
        } else {
            const filteredItems = document.querySelectorAll(`.${category}`);
            filteredItems.forEach(item => {
                item.style.display = 'block';
            });
        }
    
        event.currentTarget.classList.add('active');
    }
    