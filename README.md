# Essenz Perfumes

![Essenz Perfumes Banner](assets/images/collection_evening.png)

Welcome to the **Essenz Perfumes** codebase—a premium, front-end e-commerce landing page crafted for a dark, luxurious, and highly interactive user experience.

## ✨ Features

- **State-of-the-Art Luxury UI:** Uses a deeply atmospheric, ultra-premium dark mode (`var(--black)`, `var(--surface)`, `var(--deep)`) with subtle golden `var(--gold)` gradients and sophisticated typography (`Cormorant Garamond` and `Josefin Sans`).
- **Custom Hardware Interactivity:** Features a fully custom magnetic cursor that smoothly interacts with buttons and interactive elements, providing a highly tailored feel.
- **Cinematic Parallax & 3D Tilt:** Hero sections smoothly parallax on mouse movement, and all product/collection cards feature 3D rotational tilt tracking (`rotateX/Y` calculation based on mouse coordinates).
- **Subtle Particle Engine:** Floating golden "firefly" particles create ambient motion throughout the viewport.
- **Dynamic Sliding Cart:** A fully integrated JavaScript cart sliding drawer. Items can be dynamically added without page reloads, complete with quantity modification and removal.
- **Razorpay Integration:** The frontend handles price conversions to `INR` and is wired up to invoke the Razorpay Checkout modal for seamless payments.
- **Micro-interactions:** Animated marquee carousels, scroll-triggered fade reveals (`IntersectionObserver`), hover state glows, and "Added to Cart" momentary feedback.

## 🖼️ AI-Generated Assets

The website utilizes 10 stunning, cinematic 8k-resolution macro lifestyle and studio photography assets specifically generated via AI for this project, including:
- 6 minimalist, ultra-realistic product bottle renders mimicking true studio lighting.
- 4 atmospheric collection cover photos (splashing aquatic ice, dark rich wood/leather, elegant floral petals, and glowing embers).

## 🚀 How to Run

Because this is an entirely static client-side application (HTML/CSS/JS), there is no complex build process!

1. Clone the repository:
   ```bash
   git clone https://github.com/ShukoorTalha/Essenzperfumes.git
   ```
2. Open the `essenz-perfumes.html` file in any modern web browser.
   *(Optionally, use an extension like VSCode Live Server or Python's `http.server` for a better experience with local assets).*

## 💳 Testing Payments

The current Razorpay implementation is set up in checkout mode. To fully test payments:
1. Locate the `razorpay_checkout` function in `<script>` tags.
2. Replace `"key": "rzp_test_YOUR_KEY_HERE"` with your actual Razorpay Test Key ID.

## 🛠 Built With

* **HTML5:** Semantic architecture.
* **Vanilla CSS3:** Native CSS Variables, Flexbox/Grid layouts, custom keyframe animations, and `mix-blend-mode` effects.
* **Vanilla JavaScript:** Zero-dependency interaction logic (Cart State, Intersection Observers, 3D math calculations).
* **Razorpay Checkout JS:** External CDN integration for the payment modal.

---
*Your Essence Perfected.*