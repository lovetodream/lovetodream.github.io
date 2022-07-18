import type { RequestHandlerOutput, ResponseBody } from '@sveltejs/kit';
import { variables } from '$lib/variables';
import { api } from '$lib/api';
import type { PostsOrPages } from '@tryghost/content-api';

export async function GET(): Promise<RequestHandlerOutput> {
    const response = await fetch(`${variables.cmsUrl}/api/projects?populate=*&sort[0]=id:desc`, { headers: { 'Authorization': `Bearer ${variables.cmsApiKey}` } });
    const data = await response.json();

    let posts: PostsOrPages | never[]

    try {
        posts = await api.posts.browse({
            include: ['tags'],
            limit: '5',
            filter: ['author:timo'],
        })
    } catch {
        posts = []   
    }

    return { status: 200, body: { projects: data.data, posts: posts } as unknown as ResponseBody };
}