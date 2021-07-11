import * as core from '@actions/core';
import * as github from '@actions/github';

async function run(){
    console.log('INSIDE RUN')
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const ISSUE_NUMBER = core.getInput('ISSUE_NUMBER');
    const PROJECT_PREFIX = core.getInput('PROJECT_PREFIX');

    const issue = PROJECT_PREFIX + '-' + ISSUE_NUMBER
    
    const octokit = new github.getOctokit(GITHUB_TOKEN);

    const {context = {}} = github;
    
    const { data } = await octokit.rest.pulls.list({
        ...context.repo,
        state: 'open'
    });
    console.log('data', data);
    
    core.setOutput('IS_EXIST',true);
}
run(); 
