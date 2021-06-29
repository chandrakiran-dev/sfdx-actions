import * as core from '@actions/core';
import * as github from '@actions/github';

async function run(){
    console.log('INSIDE RUN')
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const ISSUE_NUMBER = core.getInput('ISSUE_NUMBER');
    console.log('GITHUB_TOKEN', GITHUB_TOKEN)
    console.log('ISSUE_NUMBER', ISSUE_NUMBER)
    const octokit = new github.getOctokit(GITHUB_TOKEN);

    /*const {context = {}} = github;
    console.log('context', ...context.repo)
    
    const { data } = await octokit.rest.issues.get({
        ...context.repo,
        ISSUE_NUMBER
    });

    console.log('data', data)


    core.setOutput('BRANCH_NAME', data.title);*/
}

run(); 
