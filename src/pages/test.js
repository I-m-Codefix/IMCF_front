import TestLayout from "../layouts/TestLayout";

const review = {
    "code": 200,
    "response": "영화에 작성된 모든 댓글을 조회합니다.",
    "result": [
        {
            "id": 8,
            "content": "2번영상 댓글",
            "useYn": "Y",
            "writerId": 1,
            "writerName": "안진용",
            "writerProfileImageUri": "http://k.kakaocdn.net/dn/QIED2/btrKauiSmQQ/EODLii6AomU7bc7cgSWHRk/img_640x640.jpg",
            "streamingId": 2,
            "streamingName": "comic",
            "subCommentList": [
                {
                    "id": 9,
                    "content": "2번영상 댓글입니다",
                    "useYn": "Y",
                    "writerId": 2,
                    "writerName": "박현춘",
                    "writerProfileImageUri": "http://k.kakaocdn.net/dn/pokR9/btryRXaLKXT/LepEWkkQx3kVbQfsxZyhEk/img_640x640.jpg",
                    "streamingId": 2,
                    "streamingName": "comic",
                    "subCommentList": []
                }
            ]
        },
        {
            "id": 12,
            "content": "새로 추가된 댓글입니다. 22",
            "useYn": "Y",
            "writerId": 4,
            "writerName": "17한범수",
            "writerProfileImageUri": "http://k.kakaocdn.net/dn/RrDRg/btrK5w02PNV/R1yWSDfSO7V2A8b8dDUo5K/img_640x640.jpg",
            "streamingId": 2,
            "streamingName": "comic",
            "subCommentList": []
        },
        {
            "id": 13,
            "content": "새로 추가된 댓글입니다. 22",
            "useYn": "Y",
            "writerId": 4,
            "writerName": "17한범수",
            "writerProfileImageUri": "http://k.kakaocdn.net/dn/RrDRg/btrK5w02PNV/R1yWSDfSO7V2A8b8dDUo5K/img_640x640.jpg",
            "streamingId": 2,
            "streamingName": "comic",
            "subCommentList": []
        },
        {
            "id": 15,
            "content": "새로 추가된 댓글입니다. 22",
            "useYn": "Y",
            "writerId": 4,
            "writerName": "17한범수",
            "writerProfileImageUri": "http://k.kakaocdn.net/dn/RrDRg/btrK5w02PNV/R1yWSDfSO7V2A8b8dDUo5K/img_640x640.jpg",
            "streamingId": 2,
            "streamingName": "comic",
            "subCommentList": []
        },
        {
            "id": 16,
            "content": "새로 추가된 댓글입니다. 33",
            "useYn": "Y",
            "writerId": 4,
            "writerName": "17한범수",
            "writerProfileImageUri": "http://k.kakaocdn.net/dn/RrDRg/btrK5w02PNV/R1yWSDfSO7V2A8b8dDUo5K/img_640x640.jpg",
            "streamingId": 2,
            "streamingName": "comic",
            "subCommentList": []
        },
        {
            "id": 17,
            "content": "새로 추가된 댓글입니다. 44",
            "useYn": "Y",
            "writerId": 4,
            "writerName": "17한범수",
            "writerProfileImageUri": "http://k.kakaocdn.net/dn/RrDRg/btrK5w02PNV/R1yWSDfSO7V2A8b8dDUo5K/img_640x640.jpg",
            "streamingId": 2,
            "streamingName": "comic",
            "subCommentList": []
        }
    ]

}

function Test() {
  return (
    <TestLayout>
        <div></div>
    </TestLayout>
  );
}

export default Test;