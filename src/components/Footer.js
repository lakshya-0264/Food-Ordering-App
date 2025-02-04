const Footer= () => {
    const year = new Date().getFullYear();
    return(
        <div className="footer">
            Created by <span>👨‍💻</span> <a href="https://www.linkedin.com/in/lakshya-singhal" target="_blank">Lakshya Singhal</a>
            <span>&copy;</span>{year}
            <strong><span>Padharo Sa</span></strong>
        </div>
    );
};