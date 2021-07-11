import * as core from '@actions/core';
import * as github from '@actions/github';

async function run(){
    console.log('INSIDE RUN')
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const ISSUE_NUMBER = core.getInput('ISSUE_NUMBER');
    const LABEL = core.getInput('LABEL');
    
    const octokit = new github.getOctokit(GITHUB_TOKEN);

    const {context = {}} = github;
    
    const { data } = await octokit.rest.issues.get({
        ...context.repo,
        issue_number: ISSUE_NUMBER
    });

    let isExist = false;
    let labels = data.labels || [];
    for(let label of labels){
        if(label.name.toUpperCase().includes(LABEL.toUpperCase())){
            isExist = true;
            break;
        }
    }
    
    core.setOutput('IS_EXIST',isExist);
}
run(); 
