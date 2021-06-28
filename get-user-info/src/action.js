import * as core from '@actions/core';
import * as github from '@actions/github';
import { Octokit } from '@octokit/rest';

async function run(){
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');

    const octokit = new Octokit({
        auth: GITHUB_TOKEN,
    });
      
    console.log('loaded octokit');

    const { data } = await octokit.request("/user");
    console.log('User data', data);
    core.setOutput(OUTPUT_USER, data);
}

run();