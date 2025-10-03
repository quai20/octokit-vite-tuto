// src/main.js
import { Octokit, App } from "https://esm.sh/octokit";
document.getElementById("myButton").onclick = async () => {
    const gh_deploy_token = import.meta.env.GH_DEPLOY_TOKEN;
    const octokit = new Octokit({
        auth: gh_deploy_token
    });
    const repoContent = await octokit.rest.repos.getContent({
        owner: document.getElementById("owner").value || 'euroargodev',
        repo: document.getElementById("repo").value || 'argopy'
    });
    //console.log('Files found at root level', repoContent.data.map((file) => file.name));
    document.getElementById("content").innerText = JSON.stringify(repoContent.data.map((file) => file.name), null, 2);
};