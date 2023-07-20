import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function ButtonScroll() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const triggerHeight = 1200; // Altura em pixels em que o botão será exibido

      if (
        scrollPosition > triggerHeight &&
        scrollPosition + windowHeight < documentHeight
      ) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="button-scroll-container animate-bounce">
      {showButton && (
        <Image
          alt="Imagem de seta apontando pra cima indicando o topo do site
        "
          width={50}
          height={50}
          src="https://cdn-icons-png.flaticon.com/128/8336/8336043.png"
          className="button-scroll rotate-90"
          onClick={scrollToTop}
        />
      )}
    </div>
  );
}
