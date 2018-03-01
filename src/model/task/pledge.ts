// Добавил Pledges в SbrfTask
export interface Pledge {
    objType: string,
    name: string,
    count: number,
}
export interface Pledges
{
    totalCount: number,
    objects: Pledge[],
}