let Mock = require('mockjs')
let Random = Mock.Random
let List = Mock.mock({
    'data|3' : [
        {
        'id|+1' : 1,
        'list|2' : [
            {
                "id|+1":1,
                'name|3' : '@cword',
                color:()=>Random.color(),
                'list|3' : [
                        {
                            "id|+1":1,
                            color:()=>Random.color(),
                            "name":"@cname",
                            'list|4' : [
                                {
                                    "id|+1":1,
                                    color:()=>Random.color(),
                                    "name":"@cname"
                                }
                        ]
                        }
                ]
            }
        ]
        }
    ]
})
module.exports = List
