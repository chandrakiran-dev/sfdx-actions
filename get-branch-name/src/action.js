import * as core from '@actions/core';
import * as github from '@actions/github';

async function run(){
    console.log('INSIDE RUN')
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const ISSUE_NUMBER = core.getInput('ISSUE_NUMBER');
    const PROJECT_PREFIX = core.getInput('PROJECT_PREFIX');
    
    const octokit = new github.getOctokit(GITHUB_TOKEN);

    const {context = {}} = github;
    
    const { data } = await octokit.rest.issues.get({
        ...context.repo,
        issue_number: ISSUE_NUMBER
    });

    const branchName = 'feature/'+ PROJECT_PREFIX + '-' + ISSUE_NUMBER + '-' + data.title.replace(/ /g, '-').replace(/\[/g, '').replace(/]/g, '')
    core.setOutput('BRANCH_NAME',branchName.toLowerCase());
}
run(); 
