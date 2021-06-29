import * as core from '@actions/core';
import * as github from '@actions/github';

async function run(){
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const ISSUE_NUMBER = core.getInput('ISSUE_NUMBER');
    const octokit = new github.getOctokit(GITHUB_TOKEN);

    const {context = {}} = github;

    const { data } = await octokit.rest.issues.get({
        ...context.repo,
        ISSUE_NUMBER
    });


    core.setOutput('BRANCH_NAME', data.title);
}

run(); 
