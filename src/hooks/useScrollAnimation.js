import { useEffect } from "react";

export default function useScrollAnimation() {
    useEffect(() => {
        const elements = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        entry.target.classList.remove("exit");
                    } else {
                        entry.target.classList.remove("show");
                        entry.target.classList.add("exit");
                    }
                });
            }, { threshold: 0.15 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}