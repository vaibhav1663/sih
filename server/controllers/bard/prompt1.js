exports.getPrompt = async (req) => {
    const { promptText } = req

    const prompt = promptText
    
    console.log("adfs");
    const myHeaders = new Headers();
    myHeaders.append("authority", "bard.google.com");
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "en-US,en;q=0.6");
    myHeaders.append("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
    myHeaders.append("cookie", "HSID=ARPGoHTcvy_DpkDy9; SSID=ALuKvVBzbaeonoopc; APISID=EXJTWuST7H0KDQwX/AAYqQlBYYvB5cFnt0; SAPISID=ROQFJ0pISUgnU2LJ/AdPQTRmgatXLvMukS; __Secure-1PAPISID=ROQFJ0pISUgnU2LJ/AdPQTRmgatXLvMukS; __Secure-3PAPISID=ROQFJ0pISUgnU2LJ/AdPQTRmgatXLvMukS; __Secure-1PSIDTS=sidts-CjEBNiGH7sajvtGGns8R6oirG01bdvURcVa3KLGgEeGW5vH_vjOdL5QEDvJK4Jp2MrSIEAA; __Secure-3PSIDTS=sidts-CjEBNiGH7sajvtGGns8R6oirG01bdvURcVa3KLGgEeGW5vH_vjOdL5QEDvJK4Jp2MrSIEAA; SEARCH_SAMESITE=CgQI85kB; SID=eQhZX8BEfF_6hDZq_k6Ya8AmpX0wJyOaVFG3OtDQxRKhuPIjMSqeTqu0SItc9MKNOSSKpg.; __Secure-1PSID=eQhZX8BEfF_6hDZq_k6Ya8AmpX0wJyOaVFG3OtDQxRKhuPIjA-qen2xOJpmr8QHuryxqsg.; __Secure-3PSID=eQhZX8BEfF_6hDZq_k6Ya8AmpX0wJyOaVFG3OtDQxRKhuPIj2NlibhTiD_hYsFCkH2jl-w.; NID=511=amd_el9Smz3NJrzh_3BF2sKLOkmKm9mgCVXuOFmqacMjLfHHUp_MeOFyGVqtuDer2b_spuXQfLeWTujrLgeG3d88OFbR38Kr1yv9Q2ZX1Gcr1DpEmh1LXNXE_-1oJ7AtJ_SDGOanaB6MDMYq-E6RqvBGCfI34VBaM1SeiPdJnbrmmBjnPAy1fa9aTlFB5bFk0Mevlt6lyH9QZ_renWuE_Zb9gR9c7zsSLMrzqija8gKxs4eWqY5q_yQMKIYQ3xXN4_OEtPtzjiM88NIgT5jK6mg9pyS71JXhbOPKRE6HelL1UxWQBc_QiPgaRYpSoftsXsl3DcTNFKzdqqNMDwXNw4hnLRQqQWgRvjP0z0fLAWGwrEzRCYHDx7pbCwxk6D8J0pLdaNqjgR5Y0U0I7pvyP-gk5ImoSbGvShCUNfflOZc6ryalglhL37RuDvLpZHAf9Qm-VVKX7JjYK9kiBSkIlE5EEVXXrm-Su8WtJwt89wdVVkdOzNvgxXnMHeNnN8q0Nxb7E8gM6les8FIPvaIqmRm6YZUJnqkhGKaHcN8xwmguqo2pDbLDDR1E1ybCjQ; AEC=Ackid1RXMX6bS3J7Wz-6UMzhY3Ax7BvbDjZAp07ZwPcf7Zt0A15ihbHGzos; __Secure-ENID=16.SE=oOAaRAmcVkNG0kKfWnkx8A80PVHKFeuOJYwEJCXREyofMMxcMY9FW8pawmmEf_vh6xvYds16A7dCe72e8asx2I-RGyu8YCJAg4XP3nkZq04oLjqCgyyf6bsEEWZsjbP38TdOYtuvQ-lydr7TNRVxLcPdvdQ3Yu9fkhkXVY62qUtApry3QTzAm3ljfGmnWsHQ5otH0fjPK0QL4wf7oBH2KyeKCnzus33lvPEi91052CFntU2V4s3Tlt94OOMPL6ITyMCZ7jwnsOINr4iGY_4G6klBUUvjvji96yceCHob7pvgzLWb3AZOH5q6BaqZQ0x-M2iXG6TcjVQrjCsTBRm1hYSOYQc68Pa1fmyhnOAoTRmxpHdsag; 1P_JAR=2023-12-18-18; SIDCC=ABTWhQHI5hTZvTdumnrJ9AJESrCMOlAeHFnUG1-D6C970Teu9awBqIdz6Qr5D-o1q0sHLbUUHw; __Secure-1PSIDCC=ABTWhQGGBy4z4IFgPr6OAhQP0kdxIV4wdT5sHWrSESi_Z4IasB8D1PQRBdDE3BbnbIdi4KGc7mo; __Secure-3PSIDCC=ABTWhQFz9yyrjE9nuGnrZq2xae5spW6Ss9IYjEWmCIgdk9k1G-d7n9zdyvF4KnWwsM9hg5nZy8g8; SIDCC=ABTWhQHMpN_BEBK3pECXyKQRDI6_s-iMQhRdIlxeHDukx1WBxwmdpmqCaQyb3TobLkRR8H4B7w; __Secure-1PSIDCC=ABTWhQF6wBc8fNba6qqZFBQpoLokLrrgfGZwZgSRJjF0jocrmuHhR90Q2JurLEFdA0X-OvA9Gtg; __Secure-3PSIDCC=ABTWhQEaYyo8To_XOCxc7brkV8xD5rAUXnfR6cnwDqsa6ZGp2Yh0T7Fk-yUdxAKYI4A0LPJl9Ow-");
    myHeaders.append("origin", "https://bard.google.com");
    myHeaders.append("referer", "https://bard.google.com/");
    myHeaders.append("sec-ch-ua", "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Brave\";v=\"120\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-model", "\"\"");
    myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
    myHeaders.append("sec-ch-ua-platform-version", "\"15.0.0\"");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("sec-gpc", "1");
    myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
    myHeaders.append("x-same-domain", "1");
    var raw = `f.req=%5Bnull%2C%22%5B%5B%5C%22${prompt}%5C%22%2C0%2Cnull%2Cnull%2Cnull%2Cnull%2C0%5D%2C%5B%5C%22en%5C%22%5D%2C%5B%5C%22c_673a9e3dbae2d932%5C%22%2C%5C%22r_4c9f524942a15827%5C%22%2C%5C%22rc_33d38751fc386f60%5C%22%5D%2C%5C%22!pqWlpf3NAAYd8nJvPfJCdEPf0mwDe5Y7ADQBEArZ1Mq15FwaBdj-LHfzXJlE10QSuSuOHGTDbacO0RB_C6pciz3xDBl3UfEwsZJu95v3AgAAAs9SAAAARmgBB5kDeKMBVrAXRm7Kj8JmToV6ndC7_j4CjyVKBRMEdiQUXlkP8qxb1cePsn1gjddbuwh6cq_wUNBUVBoKG-oc8ZbaPGgBEilm19flbHheaQgfMqICTLuLrHXm04wm9uL5c0VJHWCAHK0ZXgNM5RcIg8TCx-0U7wbSn80EDNBrMjf1MRW2MD_o-ezE4-802RXbUXYzsvO33iScOpqdtCKO7E2VN7SLgdKblt8zBOZaQFhWCtl0p7SQpvowPyg7LbdWLH_07A_qUfBF5kduJrvJe1GuKvW27mcDKpmINYR06nq25Z4E8wrXTSP-XDig7aVMUIHZeosgGLKY_DSa7uyn2O4mTgw7V0M551PC5g608KNkZbaYpKFZ2LQFM_Xd-QeRInXpM2m4FmXwixX4E9iFKsd41CDlJPKkHeHXC6r1vC8mnqBRDByszj-K1t1KJgqXAYE5w3GoCnUc284s3jXWYkCe2vcUCTFt_XHuar6oarXpEUGnMGcY7gXDADvORKHj-ieQ-tz_yvJA7Jq1H5t1iZN9Rj11RGX_t6kNr4B4yihqctwUqoi_4C-c_SRcEqQuDXrdsF8kg6cQPwoC0SXuMdAcBKKNzdPTkzS0998J8lEKbs2R2ThiPUQTJCVTfqALaIpharbGEtz5Z-XcZbfuuyKPR66xnKjY5U43I8BOfUiEv1f9hKxPJRbhZZtJlteFr-FvX6rN2CerqVcBj0lH7RF82yhQ29k9a_Mx6N4jlrg1XCW7UivVNwEsJCYR0IIn_ePLPB2b7oUumo5cppOa5UNephH4_0yJDK8TM7KQYRscs5SGs6hXDUEY0Pah-4ShBxro4HBHUb6zw7hK57iOM7vYB4PLNeanKyYTV7iDKgxCSLvq2b2svi9iAivdZEMeLuW2dsMK1JERwFNw7uufYRnSQtQdaNFI1SItnr1z6TyKRiyIONRk7BIz3WW_46ms2b09T0q-oWk3Q0qmzGMmuzOw-cUx_XRZgINjxBWyPsqMjH4brP57odNvd_SL5v3tOaYf2Fn95JXHN9ahYxVpD1w_f0hHHuhUNVPQ_6G3ykSbVFei5mD1PZunBHOSOhPe3KH79D_fLaWi8vbnyaOU6265PFFe3K-hSJVzsIW9urW-RanBNhfVwFW1f4UWlzfokaZ-yjyZ0Hs1kbnbLcnOYLCpxAcCr2Yj91E0dA%5C%22%2C%5C%225b8dc826aa48d53136cb262a63360d1e%5C%22%2Cnull%2C%5B1%5D%2C1%2Cnull%2Cnull%2C1%2C0%5D%22%5D&at=AOTFbH6Z9Y4to7jFTfw7tm945_1c%3A1702923980389&`;

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    const AIResponse = await fetch("https://bard.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate?hl=en&rt=c", requestOptions)
    .then(async (response) => {
            let lines = (await response.text()).split("\n");
            let longest_line = lines.reduce(function (a, b) {
                return a.length > b.length ? a : b;
            }, "");
            let response1 = await JSON.parse(JSON.parse(longest_line)[0][2])[4][0][1][0];
            const processedResponse = response1.replaceAll(/\*/g, "").replaceAll("\n\n", "\n").replaceAll("  ", " ");
            console.log("Got this thing");
            console.log("adfs");
            console.log({processedResponse: processedResponse});
            return (processedResponse);
           
        })
        
        .catch(error => console.log('error', error));
        
        return AIResponse
    };