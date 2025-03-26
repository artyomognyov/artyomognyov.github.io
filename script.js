const themeMeta = document.getElementById('theme-color');

function updateTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeMeta.setAttribute('content', '#000');
    } else {
        themeMeta.setAttribute('content', '#fafafa');
    }
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);
updateTheme();