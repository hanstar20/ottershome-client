import React, { useEffect } from 'react'
import '../../styles/public/kakaomap.css'
const {kakao} = window;



export default function KakaoMap() {

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(35.811701, 128.777525),
            level: 5
        };

        const map = new kakao.maps.Map(container, options);

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        var mapTypeControl = new kakao.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

// 주소로 좌표를 검색합니다
geocoder.addressSearch('경북 경산시 한의대로 136', function(result, status) {

    // 정상적으로 검색이 완료됐으면 
     if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: coords
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">이웃집수달</div>'
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
    } 
});    


        // // 지도에 마커를 표시합니다 
        // var marker = new kakao.maps.Marker({
        //     map: map, 
        //     position: new kakao.maps.LatLng(35.809321, 128.777525)
        // });

        // var content = '<div class="wrap">' + 
        //     '    <div class="info">' + 
        //     '        <div class="title">' + 
        //     '            이웃집 수달' + 
        //     '        </div>' + 
        //     '        <div class="body">' + 
        //     '            <div class="img">' +
        //     '                <img width="73" height="70">' +
        //     '           </div>' + 
        //     '            <div class="desc">' + 
        //     '                <div class="ellipsis">경북 경산시 한의대로 136 이웃집수달</div>' + 
        //     '                <div class="jibun ellipsis">(우) 38577 (지번) 점촌동 60-11</div>' + 
        //     '                <div><a href="https://map.kakao.com/link/map/45889924" target="_blank" class="link">카카오맵</a>  <a href="https://naver.me/FxLX00Ao" target="_blank" class="link">네이버지도</a></div>' + 
        //     '            </div>' + 
        //     '        </div>' + 
        //     '    </div>' +    
        //     '</div>';

        //     // 마커 위에 커스텀오버레이를 표시합니다
        //     // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
        //     var overlay = new kakao.maps.CustomOverlay({
        //         content: content,
        //         map: map,
        //         position: marker.getPosition()       
        //     });

        //     // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
        //     kakao.maps.event.addListener(marker, 'click', function() {
        //         overlay.setMap(map);
        //     });

    }, [])

  return (
    <div id="map" style={{width:'100%', height:'70vw'}}></div>
  )
}
