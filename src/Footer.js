import styled from "styled-components";

const St = {
  Container: styled.div`
    background-color: #161429;
    color: #c1c1c1;
  `,
};

export const Footer = () => {
  return (
    <>
      <St.Container>
        <div data-section="hfg_footer_layout_main">
          <div>
            <div>
              <div
                data-section="neve_sidebar-widgets-footer-one-widgets"
                data-item-id="footer-one-widgets">
                <div>
                  <div id="block-8">
                    <figure>
                      <img
                        decoding="async"
                        loading="lazy"
                        width="120"
                        height="62"
                        src=""
                        alt=""
                      />
                    </figure>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div
                data-section="neve_sidebar-widgets-footer-two-widgets"
                data-item-id="footer-two-widgets">
                <div>
                  <div id="block-13">
                    <p>
                      <font size="2pt">
                        <b>
                          종로구, 서울, 대한민국
                          <br />
                          (00000) Tel: +82-2-000-0000 Fax: +82-2-000-0001 Email
                          : admin@everymoneta.co.kr{" "}
                        </b>
                      </font>
                    </p>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </St.Container>
    </>
  );
};
