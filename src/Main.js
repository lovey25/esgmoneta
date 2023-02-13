import styled from "styled-components";
import Chart from "./Chart";

const St = {
  Container: styled.div``,
  Overview: styled.div`
    min-height: 80px;
    clear: both;
    margin: 10px 0;
    position: relative;
    overflow: auto;
  `,
  ChartArea: styled.div``,
};

export default function Main() {
  return (
    <>
      <St.Container>
        <St.Overview>
          <>
            <h2 class="title1Depth ng-binding">ARIRANG Apple채권혼합Fn</h2>
            <p>
              <a
                href="https://finance.naver.com/item/coinfo.naver?code=447660"
                class="ellipsis ng-binding"
                title="ARIRANG Apple채권혼합Fn"
                target="fileDownLoad">
                <span
                  class="glyphicon glyphicon-save"
                  aria-hidden="true"></span>{" "}
                ARIRANG Apple채권혼합Fn
              </a>
            </p>
            <div>
              <p>
                이 투자신탁은 국내 채권 및 채권관련 집합투자증권을 법 시행령
                제94조 제2항 제4호에서 규정하는 주된 투자대상자산으로 하고 해외
                주식 및 주식관련 집합투자증권에도 일부 투자함으로써 1좌당
                순자산가치의 일간 변동률을 "FnGuide 애플채권혼합 지수
                (원화환산)"의 1배수와 유사하도록 투자신탁재산을 운용함을
                목적으로 합니다. 기초지수인 “FnGuide 애플채권혼합 지수
                (원화환산)”는 글로벌 주식 단일 종목(애플)과 KIS
                3년국채선물추종지수에 3:7로 투자하는 지수로서, 투자 비중을 매일
                동일한 3:7 비중으로 조정하는 Constant Mix 방식을 적용합니다.
              </p>
            </div>
          </>
        </St.Overview>
        <St.ChartArea>
          <Chart />
        </St.ChartArea>
      </St.Container>
    </>
  );
}
