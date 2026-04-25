<template>
  <footer class="custom-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>林峰系统论</h3>
        <p>个人知识体系</p>
      </div>
      <div class="footer-section">
        <h4>快速链接</h4>
        <ul>
          <li><a href="/">首页</a></li>
          <li><a href="/01-国模块/">国模块</a></li>
          <li><a href="/02-族模块/">族模块</a></li>
          <li><a href="/03-家模块/">家模块</a></li>
          <li><a href="/04-企模块/">企模块</a></li>
          <li><a href="/05-人模块/">人模块</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>联系我们</h4>
        <p>邮箱: contact@linfeng-system.com</p>
        <p>GitHub: <a href="https://github.com/linfeng-system" target="_blank">linfeng-system</a></p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} 林峰系统论. 保留所有权利.</p>
    </div>
  </footer>
</template>

<style scoped>
.custom-footer {
  background: var(--vp-c-bg-secondary);
  padding: 2rem 0;
  margin-top: 3rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-section h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.footer-section h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.footer-section p {
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: var(--vp-c-brand);
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-3);
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>