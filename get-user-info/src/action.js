import * as core from '@actions/core';
import * as github from '@actions/github';

async function run(){
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const octokit = new github.getOctokit(GITHUB_TOKEN);
      
    console.log('loaded octokit');

    const data = await octokit.rest.users.getByUsername({
        username: 'chandrakiran-dev'
    });
    console.log('User data', data);
    core.setOutput('OUTPUT_USER', data.data.email);
}

run(); 