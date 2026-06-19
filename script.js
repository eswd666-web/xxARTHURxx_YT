// T-packs data - Add your T-packs here
const tpacks = [
    {
        id: 1,
        name: "Classic Pack",
        description: "The original Bloxd.io texture pack with classic textures",
        icon: "📦",
        downloadUrl: "#" // Replace with actual download link
    },
    {
        id: 2,
        name: "Modern Pack",
        description: "Modern and sleek texture pack with enhanced graphics",
        icon: "✨",
        downloadUrl: "#" // Replace with actual download link
    },
    {
        id: 3,
        name: "Dark Pack",
        description: "Dark-themed texture pack perfect for night gaming",
        icon: "🌙",
        downloadUrl: "#" // Replace with actual download link
    },
    {
        id: 4,
        name: "Fantasy Pack",
        description: "Fantasy-themed pack with magical textures",
        icon: "🔮",
        downloadUrl: "#" // Replace with actual download link
    }
];

// Function to render T-packs
function renderTpacks() {
    const container = document.getElementById('tpacksContainer');
    container.innerHTML = tpacks.map(tpack => `
        <div class="tpack-card">
            <div class="tpack-preview">${tpack.icon}</div>
            <div class="tpack-content">
                <h3>${tpack.name}</h3>
                <p>${tpack.description}</p>
                <button class="download-btn" onclick="downloadTpack('${tpack.name}', '${tpack.downloadUrl}')">Download</button>
            </div>
        </div>
    `).join('');
}

// Download function
function downloadTpack(name, url) {
    if (url === '#') {
        alert(`Download link for ${name} will be added soon!`);
        return;
    }
    window.location.href = url;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', renderTpacks);