import * as core from '@actions/core';
import * as github from '@actions/github';

async function run(){
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const octokit = github.getOctokit(GITHUB_TOKEN);

    const { data } = await octokit.request("/user");
    console.log('User data', data);
    core.setOutput(OUTPUT_USER, data);
}

run();