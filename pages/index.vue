<template>
  <div>
    <section class="c-hero">
      <div class="c-hero__body">
        <p class="c-hero__body__lead">We Enjoy Technology</p>
        <p class="c-hero__body__text">
          すべての開発者が自由な開発に取り組める世界の実現へ
        </p>
      </div>
      <img src="~/assets/image/top-hero.png" alt="hero" class="c-hero__image" />
    </section>

    <section class="l-container--large l-container--contents">
      <div class="c-section--image-text">
        <div class="c-section--image-text__image">
          <img src="~/assets/image/top-service.png" alt="" />
        </div>
        <div class="u-display-flex-grow-1">
          <p class="c-heading--sub">Our Service</p>
          <h2 class="c-heading--lv1">5,000社の導入実績を誇るCMSの開発</h2>
          <p class="c-text">
            私たちは、継続的な改善やリニューアルが必要な時代に、一枚岩的なシステム開発プロセスは不向きだと考え、API中心設計で柔軟性をとことん追求したエンタープライズ・ヘッドレスCMS
            "Kuroco"を2021年にリリースしました。<br />
            当サービスを通して、すべての開発者が自由な開発に取り組める世界の実現に向け、尽力して参ります。
          </p>
          <NuxtLink to="/service/" class="c-button">事業内容を見る</NuxtLink>
        </div>
      </div>
    </section>

    <section class="l-container--large l-container--contents">
      <div class="c-section--list">
        <div class="c-section--list__heading">
          <p class="c-heading--sub">News Release</p>
          <h2 class="c-heading--lv1">ニュースリリース</h2>
          <NuxtLink to="/news/" class="c-button">一覧を見る</NuxtLink>
        </div>

        <div class="u-display-flex-grow-1">
          <ul v-if="news.list.length > 0" class="c-topics-list">
            <li v-for="news in news.list" :key="news.topics_id">
              <NuxtLink :to="`/news/detail/${news.topics_id}`" class="c-topics">
                <time class="c-topics__date" :datetime="news.ymd">{{
                  news.ymd
                }}</time>
                <span class="c-badge">
                  {{ news.contents_type_nm }}
                </span>
                <p class="c-topics__title">
                  {{ news.subject }}
                </p>
              </NuxtLink>
            </li>
          </ul>
          <p v-else>記事が存在しません</p>
        </div>
      </div>
    </section>

    <section class="l-container--contents c-section--bg">
      <div class="l-container--large">
        <div class="u-display-flex u-display-flex-align-items-center u-mb-20">
          <div class="u-display-flex-grow-1">
            <p class="c-heading--sub">For Members</p>
            <h2 class="c-heading--lv1">会員限定コンテンツ</h2>
          </div>
          <div class="u-display-flex-shrink-0">
            <NuxtLink to="/ltd-news/" class="c-button u-mb-20"
              >一覧を見る</NuxtLink
            >
          </div>
        </div>

        <UiCardList
          v-if="ltdNews?.data?.list?.length > 0"
          :list="ltdNews.data.list"
        ></UiCardList>

        <div class="l-container--contents">
          <div
            class="c-section--dark-block c-section--list u-display-flex-align-items-end"
          >
            <div class="c-section--list__heading">
              <p class="c-heading--sub">For Members Only</p>
              <h2 class="c-heading--lv1">会員になるとできること</h2>
              <ul>
                <li
                  class="u-display-flex u-display-flex-align-items-center u-mb-10"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="u-display-flex-shrink-0 u-mr-10"
                  >
                    <g clip-path="url(#clip0_1638_1096)">
                      <path
                        d="M18.3333 9.23336V10C18.3323 11.797 17.7504 13.5456 16.6744 14.9849C15.5984 16.4242 14.086 17.4771 12.3628 17.9866C10.6395 18.4961 8.79768 18.4349 7.11202 17.8122C5.42636 17.1894 3.98717 16.0384 3.00909 14.5309C2.03101 13.0234 1.56645 11.2401 1.68469 9.44696C1.80293 7.65383 2.49763 5.94697 3.66519 4.58092C4.83275 3.21488 6.41061 2.26285 8.16345 1.86682C9.91629 1.47079 11.7502 1.65198 13.3916 2.38336"
                        stroke="#f9f001"
                        stroke-width="2.08333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.3333 3.33331L10 11.675L7.5 9.17498"
                        stroke="#f9f001"
                        stroke-width="2.08333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1638_1096">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  会員限定のコンテンツがすべて読める
                </li>
                <li
                  class="u-display-flex u-display-flex-align-items-center u-mb-10"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="u-display-flex-shrink-0 u-mr-10"
                  >
                    <g clip-path="url(#clip0_1638_1096)">
                      <path
                        d="M18.3333 9.23336V10C18.3323 11.797 17.7504 13.5456 16.6744 14.9849C15.5984 16.4242 14.086 17.4771 12.3628 17.9866C10.6395 18.4961 8.79768 18.4349 7.11202 17.8122C5.42636 17.1894 3.98717 16.0384 3.00909 14.5309C2.03101 13.0234 1.56645 11.2401 1.68469 9.44696C1.80293 7.65383 2.49763 5.94697 3.66519 4.58092C4.83275 3.21488 6.41061 2.26285 8.16345 1.86682C9.91629 1.47079 11.7502 1.65198 13.3916 2.38336"
                        stroke="#f9f001"
                        stroke-width="2.08333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.3333 3.33331L10 11.675L7.5 9.17498"
                        stroke="#f9f001"
                        stroke-width="2.08333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1638_1096">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  お見積もり依頼や構築方法の相談ができる
                </li>
                <li
                  class="u-display-flex u-display-flex-align-items-center u-mb-10"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="u-display-flex-shrink-0 u-mr-10"
                  >
                    <g clip-path="url(#clip0_1638_1096)">
                      <path
                        d="M18.3333 9.23336V10C18.3323 11.797 17.7504 13.5456 16.6744 14.9849C15.5984 16.4242 14.086 17.4771 12.3628 17.9866C10.6395 18.4961 8.79768 18.4349 7.11202 17.8122C5.42636 17.1894 3.98717 16.0384 3.00909 14.5309C2.03101 13.0234 1.56645 11.2401 1.68469 9.44696C1.80293 7.65383 2.49763 5.94697 3.66519 4.58092C4.83275 3.21488 6.41061 2.26285 8.16345 1.86682C9.91629 1.47079 11.7502 1.65198 13.3916 2.38336"
                        stroke="#f9f001"
                        stroke-width="2.08333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.3333 3.33331L10 11.675L7.5 9.17498"
                        stroke="#f9f001"
                        stroke-width="2.08333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1638_1096">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  充実のサポートを受けることができる
                </li>
              </ul>
              <NuxtLink to="/login/register/" class="c-button"
                >今すぐ無料会員登録する</NuxtLink
              >
            </div>
            <div class="u-display-flex-grow-1 u-display-flex-shrink-1">
              <svg
                width="260"
                height="260"
                viewBox="0 0 260 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="120"
                  height="120"
                  rx="60"
                  fill="black"
                  fill-opacity="0.2"
                />
                <rect
                  y="140"
                  width="120"
                  height="120"
                  rx="60"
                  fill="black"
                  fill-opacity="0.2"
                />
                <rect
                  x="140"
                  y="140"
                  width="120"
                  height="120"
                  rx="60"
                  fill="black"
                  fill-opacity="0.2"
                />
                <rect
                  x="140"
                  width="120"
                  height="120"
                  rx="60"
                  fill="black"
                  fill-opacity="0.2"
                />
                <path
                  d="M38.2803 44.4202H51.1207C53.3911 44.4202 55.5684 45.3221 57.1738 46.9275C58.7792 48.5329 59.6811 50.7102 59.6811 52.9805V82.9416C59.6811 81.2389 59.0046 79.6059 57.8006 78.4018C56.5966 77.1978 54.9636 76.5214 53.2608 76.5214H38.2803V44.4202Z"
                  stroke="white"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M81.0817 44.4202H68.2412C65.9709 44.4202 63.7935 45.3221 62.1882 46.9275C60.5828 48.5329 59.6809 50.7102 59.6809 52.9805V82.9416C59.6809 81.2389 60.3573 79.6059 61.5614 78.4018C62.7654 77.1978 64.3984 76.5214 66.1011 76.5214H81.0817V44.4202Z"
                  stroke="white"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M206.208 48.7004C208.298 49.1082 210.219 50.1305 211.725 51.6364C213.231 53.1424 214.254 55.0634 214.661 57.1537M206.208 40.1401C210.551 40.6225 214.601 42.5673 217.692 45.6551C220.784 48.7428 222.734 52.7901 223.222 57.1323M221.082 74.2101V80.6303C221.084 81.2264 220.962 81.8163 220.723 82.3624C220.484 82.9085 220.134 83.3987 219.695 83.8017C219.256 84.2046 218.737 84.5113 218.173 84.7023C217.608 84.8932 217.01 84.9642 216.416 84.9105C209.831 84.1949 203.505 81.9447 197.947 78.3405C192.777 75.0547 188.393 70.6708 185.107 65.5C181.49 59.917 179.239 53.5605 178.537 46.9455C178.483 46.3537 178.554 45.7573 178.743 45.1941C178.933 44.631 179.238 44.1135 179.639 43.6747C180.039 43.2358 180.527 42.8852 181.07 42.6451C181.614 42.405 182.201 42.2807 182.796 42.2802H189.216C190.254 42.2699 191.261 42.6377 192.049 43.315C192.836 43.9922 193.351 44.9327 193.496 45.9611C193.767 48.0157 194.27 50.0331 194.994 51.9747C195.282 52.7407 195.344 53.5732 195.174 54.3735C195.003 55.1738 194.606 55.9084 194.031 56.4903L191.313 59.2082C194.36 64.566 198.796 69.0021 204.154 72.0486L206.872 69.3307C207.453 68.7553 208.188 68.3588 208.988 68.1881C209.789 68.0175 210.621 68.0798 211.387 68.3677C213.329 69.0922 215.346 69.5948 217.401 69.8658C218.44 70.0124 219.39 70.536 220.068 71.337C220.747 72.1381 221.108 73.1606 221.082 74.2101Z"
                  stroke="white"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M42.5604 183.56H76.8017C79.1558 183.56 81.0818 185.486 81.0818 187.84V213.521C81.0818 215.875 79.1558 217.802 76.8017 217.802H42.5604C40.2063 217.802 38.2803 215.875 38.2803 213.521V187.84C38.2803 185.486 40.2063 183.56 42.5604 183.56Z"
                  stroke="white"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M81.0818 187.84L59.6811 202.821L38.2803 187.84"
                  stroke="white"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M215.241 218.942V214.661C215.241 212.391 214.339 210.214 212.734 208.608C211.129 207.003 208.951 206.101 206.681 206.101H191.7C189.43 206.101 187.253 207.003 185.647 208.608C184.042 210.214 183.14 212.391 183.14 214.661V218.942"
                  stroke="white"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M199.191 197.541C203.918 197.541 207.751 193.708 207.751 188.981C207.751 184.253 203.918 180.42 199.191 180.42C194.463 180.42 190.63 184.253 190.63 188.981C190.63 193.708 194.463 197.541 199.191 197.541Z"
                  stroke="white"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M217.381 197.541L221.662 201.821L230.222 193.261"
                  stroke="white"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const { data: news } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/news/list`,
  {
    credentials: 'include',
  }
);
const { data: ltdNews } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/ltd-news/list`,
  {
    credentials: 'include',
    server: false,
  }
);
</script>
