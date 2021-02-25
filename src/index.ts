import axios, { AxiosResponse, Method } from 'axios'
import qs from 'qs'

class AjaxConfig {
    url: string
    query?: Record<string, unknown>
    data?: Record<string, unknown> | string
    method?: Method = 'GET'
    headers?: Record<string, unknown>
}

/**
 * axios 接口封装
 *
 * @author CaoMeiYouRen
 * @export
 * @param {AjaxConfig} config
 * @returns {Promise<AxiosResponse<any>>}
 */
async function ajax(config: AjaxConfig): Promise<AxiosResponse<any>> {
    try {
        const { url, query = {}, data = {}, method = 'GET', headers = {} } = config
        const resp = await axios(url, {
            method,
            headers,
            params: query,
            data,
            timeout: 10000,
            baseURL: '',
        })
        return resp
    } catch (error) {
        if (error.toJSON) {
            console.error(error.toJSON())
            return error.response
        }
        console.error(error)
        throw error
    }
}
export class ServerChanTurbo {

    /**
     *
     * @author CaoMeiYouRen
     * @date 2021-02-25
     * @param {string} SCTKEY 请前往 https://sct.ftqq.com/sendkey 领取
     */
    constructor(SCTKEY: string) {
        this.SCTKEY = SCTKEY
    }
    /**
     * 请前往 https://sct.ftqq.com/sendkey 领取
     * @private
     * @type {string}
     */
    private SCTKEY: string

    /**
     * 发送消息
     *
     * @author CaoMeiYouRen
     * @date 2021-02-25
     * @param {string} text 消息的标题
     * @param {string} [desp=''] 消息的内容，支持 Markdown
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async send(text: string, desp: string = ''): Promise<AxiosResponse<any>> {
        return ajax({
            url: `https://sctapi.ftqq.com/${this.SCTKEY}.send`,
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            },
            data: qs.stringify({
                text,
                desp,
            }),
        })
    }
}
