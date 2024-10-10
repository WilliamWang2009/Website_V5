/*

import dotenv from 'dotenv';
dotenv.config();

async function fetchLatestCommitDate() {
    const token = process.env.GITHUB_TOKEN;
    const owner = 'OWNER';
    const repo = 'REPO';
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
        document.getElementById('commit-date').innerText = `Latest Commit Date: ${new Date(latestCommitDate).toLocaleString()}`;
    } else {
        document.getElementById('commit-date').innerText = 'Failed to load commit date';
    }
}

fetchLatestCommitDate(); */