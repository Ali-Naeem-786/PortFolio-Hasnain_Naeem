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
    // function filterSkills(category) {
    //     const skillItems = document.querySelectorAll('.skill-item');
    //     const buttons = document.querySelectorAll('.filter-button');
    
    //     buttons.forEach(button => {
    //         button.classList.remove('active');
    //     });
    
    //     skillItems.forEach(item => {
    //         item.style.display = 'none';
    //     });
    
    //     if (category === 'all') {
    //         skillItems.forEach(item => {
    //             item.style.display = 'block';
    //         });
    //     } else {
    //         const filteredItems = document.querySelectorAll(`.${category}`);
    //         filteredItems.forEach(item => {
    //             item.style.display = 'block';
    //         });
    //     }
    
    //     event.currentTarget.classList.add('active');
    // }
    

    document.addEventListener('DOMContentLoaded', function () {
        const buttons = document.querySelectorAll('.filter-button');
        const skillsList = document.getElementById('skills-list');
        const skillItems = skillsList.querySelectorAll('.skill-item');
    
        buttons.forEach(button => {
            button.addEventListener('click', function (event) {
                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
    
                const filter = this.getAttribute('data-filter');
                filterSkills(filter);
            });
        });
    
        function filterSkills(filter) {
            skillItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        }
    
        // Set the default filter to 'all'
        filterSkills('all');
    });
    