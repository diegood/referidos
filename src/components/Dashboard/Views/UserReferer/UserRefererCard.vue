<template>
      <card>
			<div class="userProfileInfo">
				<div class="image text-center">
                    <qrcode v-bind:value="form.firstName" :options="{ size: 200 }" class="img-responsive"></qrcode>
				</div>
				<div class="box">
					<div class="name"><strong>{{form.firstName}} {{form.lastName}}</strong></div>
					<div v-if="form.email" class="info">
						<span><i class="nc-icon nc-email-83"></i> <a v-bind:href="'mailto:'+form.email" title="#"> {{form.email}}</a></span>
						<span v-if="form.company"><i class="nc-icon nc-bank"></i> {{form.company}}</span>
					</div>
				</div>
                <div class="socialIcons clearfix">
                    <a href="https://www.facebook.com/web4line/" title="facebook" class="fb">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/Web4line" title="twitter" class="twitter">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a href="https://twitter.com/Web4line" title="twitter" class="twitter">
                        <i class="fa fa-rocket"></i>
                    </a>
                </div>
			</div>
		</card>
</template>
<script>
/* eslint-disable */
  import { mapFields } from 'vuex-map-fields'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import VueQrcode from '@xkeshi/vue-qrcode'
  export default {
    components: {
      Card,
      VueQrcode
    },
    computed: {
      ...mapFields(['form'])
    },  
    methods: {
      getClasses (index) {
        var remainder = index % 3
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1'
        } else if (remainder === 2) {
          return 'col-md-4'
        } else {
          return 'col-md-3'
        }
      }
    }
  }

</script>
<style scoped>
  .userProfileInfo .image {
    position: relative;
}
.userProfileInfo .box {
    padding: 0;
}

.userProfileInfo .box .info,
.userProfileInfo .box .name,
.userProfileInfo .box .socialIcons {
    padding: 15px 20px;
    border-bottom: 1px solid #e6e7ed;
}

.userProfileInfo .box .socialIcons {
    border: 0;
}

.userProfileInfo .box .info>span {
    margin: 10px 0;
    display: block;
    padding: 0 0 0 35px;
    position: relative;
}

.userProfileInfo .box .info>span .fa {
    position: absolute;
    left: 5px;
    top: 4px;
    color: #9da2a6;
}

.boxHeadline {
    margin: 0 0 25px 0;
    font-size: 18px;
    font-size: 1.8rem;
}

.boxHeadline+.boxHeadlineSub {
    margin: -18px 0 30px 0;
}

.boxHeader .boxTitle {
    margin: 22px 0 20px 30px;
}

.boxHeader .boxHeaderOptions {
    margin: 9px 12px 0 0;
}

.boxHeader .boxHeaderOptions .btn {
    color: #9da2a6;
    padding: 0;
    width: 40px;
    height: 40px;
    line-height: 42px;
    text-align: center;
    font-size: 24px;
    font-size: 2.4rem;
}

.boxHeader .boxHeaderOptions .btn:active,
.boxHeader .boxHeaderOptions .btn:focus,
.boxHeader .boxHeaderOptions .btn:hover {
    background: #f2f9ff;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
}

.boxHeader.pageBoxHeader .boxHeaderOptions {
    margin: 20px 12px 0 0;
}

.boxHeader.boxHeaderBorders {
    border-bottom: 1px solid #e6e7ed;
}

.boxHeader.box {
    padding: 30px;
}

.boxHeader.box .pageTitle {
    margin: 0 0 6px 0;
}

.boxHeader.box .pageTitle+.breadcrumb {
    margin: 0;
}

.boxTitle {
    font-size: 14px;
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 0 25px 0;
}

.boxHeadlineSub {
    font-size: 14px;
    font-size: 1.4rem;
    font-weight: 400;
    font-style: italic;
    color: #919599;
    margin: 0 0 25px 0;
    line-height: 18px;
}

.boxHeadlineSub a {
    color: #fe5621
}

.bgTitle {
    background-size: 100% 100%
}

.bgTitle .boxTitle {
    margin: 0;
    padding: 22px 30px;
    color: #fff
}

.box {
    background: #fff;
    padding: 30px;
    margin: 0 0 24px 0
}

.box.box-without-padding {
    padding: 0
}

.box.box-without-sidepadding {
    padding: 8px 0
}

.box.box-without-sidepadding .boxTitle {
    margin-left: 30px
}

.box.box-without-bottom-padding {
    padding-bottom: 0
}

.box .tableWrap {
    margin: 0 -30px
}

.box .table-responsive {
    width: auto
}

.box .panel-group:last-of-type {
    margin-bottom: 0
}


.simpleListings {
    padding: 0;
    margin: 0
}

.simpleListings li {
    list-style-type: none;
    padding: 0 0 20px 0;
    margin: 20px 0 0 0;
    border-bottom: 1px solid #e6e7ed;
    position: relative
}

.simpleListings li:first-child {
    margin-top: 0
}

.simpleListings li:only-child {
    border-bottom: 0
}

.simpleListings li .title {
    font-size: 14px;
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 0 2px 0
}

.simpleListings li .title span {
    font-weight: 400;
    text-transform: none
}

.simpleListings li .title a:hover {
    color: #fe5621
}

.simpleListings li .info {
    color: #919599;
    font-style: italic
}

.simpleListings li p {
    margin: 7px 0 0 0
}

.simpleListings li img {
    margin: 20px 0
}


@media (min-width: 992px) {
    .userProfileInfo .image img {
        width: 100%;
    }
}
</style>
