<template>
  <div>
    <UiPageHeader subject="お問い合わせ" subheading="Contact" />
    <section>
      <div class="l-container--small l-container--contents">
        <template v-if="submitted">
          <p class="c-text--pre" v-html="thanksText" />
          <NuxtLink to="/" class="c-button">トップページ</NuxtLink>
        </template>
        <template v-else>
          <div class="c-form-group">
            <p
              class="c-text c-text--pre"
              v-html="response.details.inquiry_info"
            />
            <p class="c-text--small">
              <span class="c-form-label__required">*</span>は必須項目です。
            </p>
          </div>
          <UiAlertError
            ref="errorRef"
            v-show="errors.length > 0"
            :error="errors"
          />
          <form class="c-form">
            <div
              v-for="n in response.details.cols"
              :key="n.key"
              class="c-form-group"
            >
              <label :for="n.key" class="c-form-label">{{ n.title }}</label>
              <span v-if="n.required === 2" class="c-form-label__required"
                >*</span
              >
              <!-- テキスト -->
              <template v-if="n.type === 1">
                <input
                  v-model="submitData[n.key]"
                  :name="n.key"
                  :id="n.key"
                  type="text"
                />
              </template>
              <!--テキストエリア-->
              <template v-if="n.type === 2">
                <textarea
                  v-model="submitData[n.key]"
                  rows="4"
                  cols="60"
                  :name="n.key"
                  :id="n.key"
                  placeholder=""
                ></textarea>
              </template>
              <!--ラジオボタン-->
              <template v-if="n.type === 3">
                <ul>
                  <li v-for="option in n.options" :key="option.key">
                    <input
                      v-model="submitData[n.key]"
                      type="radio"
                      :name="n.key"
                      :value="option.key"
                      :id="n.key + '-' + option.key"
                      class="c-form-toggle__radio"
                    />
                    <label :for="n.key + '-' + option.key">
                      {{ option.value }}
                    </label>
                  </li>
                </ul>
              </template>
              <!--セレクトボックス-->
              <template v-if="n.type === 4">
                <select v-model="submitData[n.key]" :name="n.key" :id="n.key">
                  <option label="選択なし" value="">選択なし</option>
                  <option
                    v-for="option in n.options"
                    :key="option.key"
                    :label="option.value"
                    :value="option.key"
                  >
                    {{ option.value }}
                  </option>
                </select>
              </template>
              <!--チェックボックス-->
              <template v-if="n.type === 5">
                <ul>
                  <li v-for="option in n.options" :key="option.key">
                    <input
                      type="checkbox"
                      :name="n.key + '[]'"
                      :value="option.key"
                      :id="n.key + '-' + option.key"
                      v-model="submitData[n.key]"
                      class="c-form-toggle__checkbox"
                    />
                    <label :for="n.key + '-' + option.key">{{
                      option.value
                    }}</label>
                  </li>
                </ul>
              </template>
              <!--日付-->
              <template v-if="n.type === 6">
                <Datepicker
                  v-model="submitData[n.key]"
                  :enable-time-picker="false"
                  :format-locale="ja"
                  :format="formatDate"
                  week-start="0"
                />
              </template>
              <!-- ファイル -->
              <template v-if="n.type === 7">
                <ul>
                  <li>
                    <input
                      type="file"
                      @change="handleFileChange"
                      :accept="
                        n.options.map(({ value }) => `.${value}`).join(',') ||
                        '*'
                      "
                      :name="n.key"
                      :id="n.key"
                    />
                  </li>
                </ul>
              </template>
              <!--マトリックス(単一選択)-->
              <template
                v-if="n.type === 10 && n.attribute.selection_type === 'single'"
              >
                <table class="u-width-100">
                  <thead>
                    <tr>
                      <th></th>
                      <th
                        v-for="(options_col, i_col) in n.options[0].value"
                        :key="i_col"
                        scope="col"
                      >
                        {{ options_col }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(options_row, i_row) in n.options[1].value"
                      :key="i_row"
                    >
                      <th scope="row">{{ options_row }}</th>
                      <td
                        v-for="(options_col, i_col) in n.options[0].value"
                        :key="i_col"
                        class="u-text-align-center"
                      >
                        <input
                          v-model="submitData[n.key][i_row - 1]"
                          type="radio"
                          :name="n.key + '[' + i_row + ']'"
                          :value="{
                            ROW: {
                              key: i_row,
                            },
                            COL: {
                              key: i_col,
                            },
                          }"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </template>
              <!--マトリックス(複数選択)-->
              <template
                v-if="
                  n.type === 10 && n.attribute.selection_type === 'multiple'
                "
              >
                <table class="u-width-100">
                  <thead>
                    <tr>
                      <th></th>
                      <th
                        v-for="(options_col, i_col) in n.options[0].value"
                        :key="i_col"
                      >
                        {{ options_col }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(options_row, i_row) in n.options[1].value"
                      :key="i_row"
                    >
                      <th>{{ options_row }}</th>
                      <td
                        v-for="(options_col, i_col) in n.options[0].value"
                        :key="i_col"
                        class="u-text-align-center"
                      >
                        <input
                          type="checkbox"
                          :id="i_col"
                          v-model="submitData[n.key][i_row - 1].COL"
                          :value="{
                            key: i_col,
                          }"
                          class="c-form-toggle__checkbox"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </template>
            </div>
            <div class="c-form-group">
              <input
                type="checkbox"
                name=""
                value=""
                id="privacy"
                @click="disabled = !disabled"
              />
              <label for="privacy">
                <NuxtLink to="#">利用規約</NuxtLink>及び<NuxtLink to="/privacy/"
                  >プライバシーポリシー</NuxtLink
                >に同意する</label
              >
            </div>
            <UiSubmitButton
              type="submit"
              id="inquiry_item_button_confirm"
              :loading="loading"
              :disabled="disabled"
              @click.prevent="handleOnSubmit"
            >
              確認する
            </UiSubmitButton>
          </form>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

const config = useRuntimeConfig();
const submitted = ref(false);
const errors = ref([]);
const errorRef = ref(null);
const disabled = ref(true);
const submitData = reactive({});
const thanksText = ref(null);
const y = ref("");
const m = ref("");
const d = ref("");
const loading = ref(false);
const date = ref();
const dateVar = ref(null);

const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}/${month}/${day}`;
};

const { data: response } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/inquiry/1`,
  {
    credentials: "include",
    server: false,
  }
);

Object.keys(response.value.details.cols).forEach((key) => {
  const object = response.value.details.cols[key];

  if (object.type === 5 || object.type === 10) {
    submitData[object.key] = ref([]);
  }

  if (object.type === 6) {
    dateVar.value = object.key;
  }

  if (object.type === 10 && object.attribute.selection_type === "multiple") {
    Object.keys(object.options[1].value).forEach((key) => {
      if (!submitData[object.key]) {
        submitData[object.key] = [];
      }

      submitData[object.key].push({
        ROW: {
          key: key,
        },
        COL: [],
      });
    });
  }
});

const handleFileChange = async (e) => {
  const fm = new FormData();
  fm.append("file", e.target.files[0]);

  try {
    const response = await $fetch(
      `${config.public.kurocoApiDomain}/rcms-api/1/upload`,
      {
        credentials: "include",
        method: "POST",
        body: fm,
        server: false,
      }
    );
    errors.value = [];
    const file_id = response.file_id;
    submitData[e.target.id] = { file_id };
  } catch (e) {
    errors.value = e?.data?.errors || [];
    nextTick(() => {
      errorRef.value.errorWrapperRef.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }
};

const handleOnSubmit = async () => {
  if (dateVar.value && submitData[dateVar.value]) {
    const formattedDate = format(
      new Date(submitData[dateVar.value]),
      "yyyy-MM-dd"
    );
    submitData[dateVar.value] = formattedDate;
  }
  try {
    loading.value = true;
    const response = await $fetch(
      `${config.public.kurocoApiDomain}/rcms-api/1/inquiry/1`,
      {
        credentials: "include",
        method: "POST",
        body: submitData,
        server: false,
      }
    );
    submitted.value = true;
    thanksText.value = response.messages?.[0];
  } catch (e) {
    errors.value = e?.data?.errors || [];
    nextTick(() => {
      errorRef.value.errorWrapperRef.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }
  loading.value = false;
};
</script>
