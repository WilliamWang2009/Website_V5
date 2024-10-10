import dotenv from 'dotenv';
dotenv.config();

async function fetchLatestCommitDate() {
    const token = process.env.TOKEN;
    const owner = 'Friars23707';
    const repo = 'Website_V5';
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

    const response = await fetch(url, {
        headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    });

    if (response.ok) {
        const commits = await response.json();
        const latestCommitDate = commits[0].commit.committer.date;
        window.print(`Latest Commit Date: ${new Date(latestCommitDate).toLocaleString()}`);
        document.getElementById("lastDate").textContent = `Latest Commit Date: ${new Date(latestCommitDate).toLocaleString()}`;
    } else {
        window.print('Failed to load commit date');
        document.getElementById("lastDate").textContent = `Failed to load commit`;
    }
}

fetchLatestCommitDate(); 