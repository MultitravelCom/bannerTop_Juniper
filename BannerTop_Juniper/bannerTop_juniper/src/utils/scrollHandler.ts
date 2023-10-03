const scrollHandler = (event: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    event.preventDefault();

    const targetElement = document.getElementById(target);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth",
        });
    }
}

export default scrollHandler;
