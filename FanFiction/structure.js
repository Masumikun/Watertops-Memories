// ==================== Dark Mode Toggle ====================
document.addEventListener('DOMContentLoaded', function() {
    // Criar botão de Dark Mode
    const darkModeToggle = document.createElement('button');
    darkModeToggle.id = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '🌙';
    darkModeToggle.title = 'Alternar Modo Escuro';
    
    // Estilizar o botão
    darkModeToggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgba(153, 50, 204, 0.8);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.5);
        font-size: 24px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    `;
    
    // Adicionar hover effect
    darkModeToggle.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.background = 'rgba(153, 50, 204, 1)';
    });
    
    darkModeToggle.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.background = 'rgba(153, 50, 204, 0.8)';
    });
    
    // Adicionar ao corpo
    document.body.appendChild(darkModeToggle);
    
    // Verificar preferência salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '☀️';
        darkModeToggle.style.background = 'rgba(255, 165, 0, 0.8)';
    }
    
    // Função para alternar modo escuro
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            this.innerHTML = '☀️';
            this.style.background = 'rgba(255, 165, 0, 0.8)';
            localStorage.setItem('theme', 'dark');
            
            // Aplicar estilos do modo escuro
            applyDarkModeStyles();
        } else {
            this.innerHTML = '🌙';
            this.style.background = 'rgba(153, 50, 204, 0.8)';
            localStorage.setItem('theme', 'light');
            
            // Remover estilos do modo escuro
            removeDarkModeStyles();
        }
    });
    
    // Aplicar estilos do modo escuro dinamicamente
    function applyDarkModeStyles() {
        // Criar ou atualizar estilos do modo escuro
        let darkModeStyles = document.getElementById('dark-mode-styles');
        
        if (!darkModeStyles) {
            darkModeStyles = document.createElement('style');
            darkModeStyles.id = 'dark-mode-styles';
            document.head.appendChild(darkModeStyles);
        }
        
        // Estilos para o modo escuro
        darkModeStyles.textContent = `
            body.dark-mode {
                background-color: #121212 !important;
                color: #e0e0e0 !important;
                transition: background-color 0.5s ease, color 0.5s ease;
            }
            
            body.dark-mode blockquote {
                background-color: rgba(30, 30, 46, 0.7) !important;
                border-color: #2a4d69 !important;
                color: #89c2d9 !important;
            }
            
            body.dark-mode pre, 
            body.dark-mode code {
                background-color: #1a1a2e !important;
                color: #a9d6e5 !important;
                border: 1px solid #2a4d69 !important;
            }
            
            body.dark-mode mark.grey {
                background-color: #333333 !important;
            }
            
            body.dark-mode mark[style*="background:#D3D3D3"],
            body.dark-mode mark[style*="background: #D3D3D3"] {
                background-color: #333333 !important;
            }
            
            body.dark-mode .title {
                color: #bb86fc !important;
                text-shadow: 0 0 10px rgba(187, 134, 252, 0.5);
            }
            
            body.dark-mode h1 {
                color: #03dac6 !important;
            }
            
            body.dark-mode h2 {
                color: #80deea !important;
            }
            
            body.dark-mode h3 {
                color: #fff9c4 !important;
            }
            
            body.dark-mode h4 {
                color: #69f0ae !important;
            }
            
            body.dark-mode h5 {
                color: #ffcc80 !important;
            }
            
            body.dark-mode h6 {
                color: #ce93d8 !important;
            }
            
            body.dark-mode b {
                color: #ffb74d !important;
            }
            
            body.dark-mode i {
                color: #64b5f6 !important;
            }
            
            body.dark-mode s {
                color: rgba(239, 83, 80, 0.7) !important;
            }
            
            /* Almas no modo escuro */
            body.dark-mode .Patience { color: #4dd0e1 !important; }
            body.dark-mode .Bravery { color: #ff8a65 !important; }
            body.dark-mode .Integrity { color: #7986cb !important; }
            body.dark-mode .Perseverance { color: #ba68c8 !important; }
            body.dark-mode .Kindness { color: #81c784 !important; }
            body.dark-mode .Justice { color: #fff176 !important; }
            body.dark-mode .Determination { color: #e57373 !important; }
            body.dark-mode .Hate { color: #424242 !important; }
            body.dark-mode .Void { color: #757575 !important; }
            body.dark-mode .Love { color: #f5f5f5 !important; }
            body.dark-mode .Mercy { color: #ffd54f !important; }
            
            body.dark-mode mark[style*="background-color: rgb(255,20,147)"] {
                background-color: #c2185b !important;
            }
            
            body.dark-mode center span {
                color: #f5f5f5 !important;
            }
        `;
    }
    
    function removeDarkModeStyles() {
        const darkModeStyles = document.getElementById('dark-mode-styles');
        if (darkModeStyles) {
            darkModeStyles.remove();
        }
    }
    
    // Aplicar estilos iniciais se necessário
    if (savedTheme === 'dark') {
        applyDarkModeStyles();
    }
});