import * as core from '@actions/core';
import * as github from '@actions/github';

async function run(){
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const octokit = new github.GitHub(GITHUB_TOKEN);
      
    console.log('loaded octokit');

    const data = await octokit.users.getColumn({
        username: 'chandrakiran-dev'
    });
    console.log('User data', data);
    core.setOutput(OUTPUT_USER, data);
}

run(); 