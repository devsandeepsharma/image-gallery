# 📸 Image Gallery 

This is a responsive image gallery built using **HTML**, **CSS (Flexbox)**, and **JavaScript**. Every time the user refreshes the page, a new set of random images is fetched from the **Unsplash API** and displayed in an aesthetically pleasing layout — with varying sizes for a real-gallery feel.


## 💡 What We Set Out to Do

This project was originally built to **revise and apply CSS Flexbox** in a hands-on way. The main aim was:

* To get comfortable with Flexbox properties in a real-world layout.

* To explore how Flexbox behaves with dynamic and uneven-sized content.

* To understand the strengths and limitations of Flexbox in modern UI designs.


## 🧠 What We Learned

* Proper use of Flexbox properties like **flex-wrap**, **justify-content**, and **flex-basis**.

* Dynamically applying CSS classes to elements via JavaScript.

* How to fetch data using the **Unsplash API** and update the DOM.

* Responsive design tricks for flex-based layouts.

* The visual differences between layouts built with **Flexbox** vs **CSS Grid** or **column-count**.

## 🔁 What We Tried First (Alternative Approach)

Initially, we tried using **Flexbox** for the layout, thinking it would give us a clean, responsive grid of images with varied sizes. The idea was to use **Flexbox** properties like **flex-wrap** and **flex-basis** to control how images are displayed.

However, as we tried implementing it, we realized Flexbox wasn't ideal for the kind of **masonry-style layout** we were looking for. Flexbox is better suited for row/column-based alignment but doesn't naturally handle vertical alignment for uneven content (like an image gallery). There was extra blank space between rows and images didn't flow in the way we wanted.

So, we switched to the column approach using **column-count**, which made the layout more dynamic. This approach better suited our needs for a masonry-style grid because it allows content to flow naturally into the next available column.

## 🔄 Comparison of Flexbox vs Column Approach
Here's a quick comparison of both approaches with code and behavior:

**Flexbox Approach:**
```css
.image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.img__card {
    flex: 1 1 300px;
    margin-bottom: 1rem;
}
```

**What happens:** Flexbox lays out items in rows and wraps them when space is available. However, the vertical alignment is inconsistent for images with different heights, causing uneven gaps.

**Why we moved away:** Flexbox is great for aligning items in rows/columns but doesn't naturally fill vertical space with varying content, causing uneven gaps between rows.

**Column Approach:**
```css
.image-container {
    column-count: 3;
    column-gap: 1rem;
}

.img__card {
    display: inline-block;
    width: 100%;
    margin-bottom: 1rem;
}
```

**What happens:** The column-count method automatically flows content into columns and fills the vertical space with an organic masonry-style effect. The content adapts dynamically based on the container width.

**Why we used this approach:** The column approach made it easier to create a masonry-style gallery where images flow naturally, filling available space efficiently. The layout looked more consistent without unwanted gaps.


## 🏗️ What We Actually Built

* A Flexbox layout image gallery

* Images of random sizes

* Fully responsive for desktop and mobile

* Dynamic fetching of images using the Unsplash API

* Smooth hover effects and transitions for better user experience


## 📚 Quick Flexbox Guide

* display: flex; → Turns a container into a flex container.

* flex-direction: row | column; → Controls direction of items.

* justify-content → Aligns items on the main axis (start, center, space-between, etc).

* align-items → Aligns items on the cross axis.

* flex-wrap → Allows items to wrap onto multiple lines.

* flex: 1 1 auto; → Shorthand for flex-grow, flex-shrink, flex-basis.

* order → Changes the visual order of items (default is 0).


### ✨ Flexbox Pros

* Great for 1D layouts (either row or column).

* Super useful for navbars, cards, and responsive containers.

### ⚠️ Flexbox Limitations

* Not great for masonry layouts or anything that needs content to flow vertically first — for that, go for CSS Grid or column-count.