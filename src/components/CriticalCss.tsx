'use client';

const CriticalCss = () => {
  return (
    <style jsx global>{`
      /* Critical CSS for above-the-fold content */
      :root {
        --primary-color: #5A67D8;
        --secondary-color: #B794F4;
        --accent-color: #F6E05E;
        --text-color: #111827;
      }
      
      html.dark {
        --primary-color: #4c51bf;
        --secondary-color: #9f7aea;
        --accent-color: #d69e2e;
        --text-color: #f3f4f6;
      }
      
      body {
        margin: 0;
        font-family: 'Inter', system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
      }
      
      header {
        transition: all 0.3s;
      }
      
      /* Base button styles */
      button, .button {
        transition: all 0.2s ease;
      }
      
      /* Basic layout for hero section */
      .hero-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 6rem 1rem 3rem;
      }
      
      /* Optimize CLS by setting explicit dimensions for critical elements */
      .hero-image-container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
      }
    `}</style>
  );
};

export default CriticalCss;