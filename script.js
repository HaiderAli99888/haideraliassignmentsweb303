/*
    Assignment 05
*/

$(document).ready(function () {

    class ContentItem {
        constructor(id, name, description, categoryGenre) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.categoryGenre = categoryGenre;
        }

        updateContentItem(id, name, description, categoryGenre) {
            if (this.id === id) {
                if (name) this.name = name;
                if (description) this.description = description;
                if (categoryGenre) this.categoryGenre = categoryGenre;
            }
        }

        toString() {
            return `
                <div class="content-item-wrapper" id="content-item-${this.id}">
                    <h2>${this.name}</h2>
                    <p>${this.description}</p>
                    <div>${this.categoryGenre}</div>
                </div>
            `;
        }
    }

    const contentItems = [
        new ContentItem(0, "Mercury", "Closest planet to the sun.", "Terrestrial planet"),
        new ContentItem(1, "Venus", "Second planet from the sun.", "Terrestrial planet"),
        new ContentItem(2, "Earth", "Our home planet.", "Terrestrial planet"),
        new ContentItem(3, "Mars", "Known as the Red Planet.", "Terrestrial planet"),
        new ContentItem(4, "Jupiter", "Largest planet in our solar system.", "Gas giant")
    ];

    contentItems.forEach(item => {
        $('#content-item-list').append(item.toString());
    });
});


