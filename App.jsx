export default () => {

  const navigation = [
      { title: "Saas", path: "javascript:void(0)" },
      { title: "Ecommerce", path: "javascript:void(0)" },
      { title: "Resources", path: "javascript:void(0)" },
      { title: "Request demo", path: "javascript:void(0)" },
  ]
  
  
    return (
      
        <div className="hero-dark-container">
            <header className="hero-dark-header">
                <nav className="hero-nav">
                    <a href="javascript:void(0)">
                        <img
                            src="src\images\iconkm.png" 
                            width={120} 
                            height={50}
                            alt="kissmetrics"
                        />
                    </a>
                    <ul className="nav-items">
                        {
                            navigation.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.path}>{item.title}</a>
                                    <a className="title"></a>
                                </li>
                            ))
                        }
                        <li>
                            <a href="javascript:void(0)" className="last-item">
                                Sign In
                              
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className="hero-dark">
                <div className="hero-details">
                    <h1>
                        ADVANCED PRODUCT AND 
                         <span> MARKET ANALYTICS</span>
                    </h1>
                    <p>
                        Accelerate growth by seeing what's happening on your website and apps
                    </p>
                    <div className="hero-btns">
                        <a href="javascript:void(0)" className="btn-primary">
                            REQUEST DEMO
                        </a>
                        
                    </div>
                </div>
                <div className="hero-img">
                    <img src="src\images\banner-right-cont-img.png" />
                </div>
            </section>
        </div>
    )
}
