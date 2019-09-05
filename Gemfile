source 'https://rubygems.org'

#ruby '2.3'

# use latest version for engine-yard
gem 'bundler', '>= 1.16.0'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.7.2'
# # Use postgresql as the database for Active Record
gem 'pg', '~> 0.21.0'
# convert array for postgresql
# (Rails 5.0 から PG::TextEncoder::Array を使用するため不要となる)
gem 'pg_array_parser'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 4.1.8'
# Use SCSS for StyleSheets assets
gem 'sass-rails', '~> 5.0.7'
# compressorr for HTML (angularjs) Template
gem 'htmlcompressor', '~> 0.4.0'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7.0'

# API Support
gem 'grape', '~> 1.2.3'
# JSON Template (with grape)
gem 'rabl', '~> 0.13.0'
# For use Rabl templates in Grape
gem 'grape-rabl', '~> 0.4.2'
# Fast JSON Parser (with rabl)
gem 'oj', '~> 2.18.0'

# bulk insertion of data into your database using ActiveRecord
gem 'activerecord-import', '~> 1.0.1'

# Organise ActiveRecord model into a tree structure
gem 'ancestry'

# rails-template をasset-pipelineで管理するためのgem
gem 'angular-rails-templates'

# 定数の一元管理
gem 'settingslogic'

# session を redis に保存
gem 'redis-rails'

#
gem 'parallel'

# Uploader
gem 'carrierwave', '~> 1.3.1'
gem 'fog-aws', '~> 3.5.0'         # for aws S3
# gem 'ruby-filemagic'            # ファイルの内容をもとにcontent-typeの判定
# gem 'carrierwave-magic'         # carrierwave との連携用gem

# Authentication
gem 'devise', '~> 4.7.0'

# managed Tenant
gem 'apartment', '~> 2.2.0'

# Aws Sdk
gem 'aws-sdk-s3',  '~> 1'
gem 'aws-sdk-sqs', '~> 1'


# ElasticSearch
gem 'elasticsearch-rails', '~> 5.0.2'
gem 'elasticsearch-model', '~> 5.0.2'
gem 'lograge', '~> 0.11.0'

# mail
gem 'mail', '~> 2.7.0'            # 2.7.0 or above, can configure maximum of net::readtimeout period.
gem 'mail_address', '~> 1.2.14'

# Exception Notification
gem 'exception_notification', '~> 4.3.0'
gem 'slack-notifier', '~> 2.3.2'

# htmlentities
gem 'htmlentities' # using in wash html

# Twitter
# 修正の動きがないため、ソースが動かないように fork した上で master branch を取得するようにする
gem 'twitter', git: 'https://github.com/ishiyu/twitter.git', ref: '844818c'
gem 'twitter-text', '~> 3.0.0'

# LINE
gem 'line-bot-api'

# Slack
gem 'slack-ruby-client'

# Socket.io Emitter (WebSocket)
gem 'redis', '~> 4.1.2'
gem 'socket.io-emitter', '~> 1.0.0'
gem 'msgpack'

# Firebase (for Chat)
gem 'firebase', '~> 0.2.6'

# Authorize with SNS
gem 'omniauth', '~> 1.9.0'
gem 'omniauth-twitter', '~> 1.4.0'
gem 'ginjo-omniauth-slack', require:'omniauth-slack'

# Intercom
gem 'intercom-rails', '~> 0.4.0'
# Mixpanel
gem 'mixpanel-ruby'

# encrypt/decrypt smtp password
gem 'aes'

# background job
# https://github.com/mperham/sidekiq/blob/master/4.0-Upgrade.md
gem 'redis-namespace', '~> 1.6.0'
gem 'sidekiq', '~> 5.2.7'
gem 'sidekiq-failures'

# encodes QR Codes
# (A new pre-release has been made v1.0.0.pre. A fresh start after a long pause.)
gem 'rqrcode', '< 1.0.0'

# image processing library
gem 'rmagick', '~> 2.16.0'

gem 'rubyzip', '~> 1.2.2'

# for Bulk Insert
# gem 'activerecord-import'

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7' # devise uses bcrypt

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]

# Nokogiri の脆弱性対応
gem 'rails-html-sanitizer', '~> 1.0.3'
gem 'rails-dom-testing', '~> 2.0.2'

# PRIVATE GEM
gem 'fast4jp', git: 'git@github.com:ingage/fast4jp.git'


group :development, :test do
  gem 'rspec-rails'              # テストライブラリ
  gem 'factory_bot_rails'        # activerecord のモデルの生成
  gem 'json_expressions'         # JSON チェック用のヘルパー
  gem 'database_cleaner', '~> 1.7.0'         # テスト後のデータベースのクリーン
  gem 'spring' # , '~> 2.0.1'                   # テスト高速化
  gem 'spring-commands-rspec'    # guard で spring を呼ぶために必要
  gem 'bootsnap', require: false
  gem 'teaspoon', '~> 1.1.5'                 # javascript テストランナー
  gem 'teaspoon-jasmine', '~> 2.3.4'         # javascript テストランナー

  gem 'webmock'
  gem 'fakeweb'

  # OSXの場合のみ、ファイル変更検知のため（それ以外の環境ではポーリングになる）
  #  gem 'rb-fsevent', :require => false if RUBY_PLATFORM =~ /darwin/i

  gem 'capybara', '~> 2.14.4'                 # rails のインテグレーションテスト
  gem 'poltergeist', '~> 1.15.0'              # capybara の js driver を phantom js にする
  gem 'dotenv-rails'
end

group :development do
  # guard 系
  gem 'guard' # , '~> 2.14.1'                    # ファイル監視
  gem 'guard-livereload', '~> 2.5.2'          # livereload
  gem 'guard-rspec', '~> 4.7.3'               # テストの自動化
  gem 'guard-coffeescript'       # テスト用コードのコンパイル用
  gem 'guard-rails', '~> 0.8.0'               # guard 起動時にrails-serverを起動する
  gem 'guard-rails-assets'       # assetsを自動コンパイル
  # guard で js test 時にエラーが発生するため、最新ソースを取得する
  # https://github.com/modeset/guard-teaspoon/pull/24
  gem 'guard-teaspoon', :git => 'https://github.com/modeset/guard-teaspoon.git'
  #gem "guard-teaspoon"           # javascript テストの自動化

  # ruby error 時の画面でデバッグを可能にする
  gem 'better_errors'
  gem 'binding_of_caller'

  # console 表示
  gem 'pry-rails'        # rails console で pry を使う
  gem 'pry-byebug'       # debugger

  # rails console 内で Apartment::Database.switch が動作しなくなったため、コメントアウト
  # gem 'hirb'           # PryでのSQLの結果を綺麗に表示
  # gem 'hirb-unicode'
  # gem 'awesome_print'  # Object表示をキレイに表示

  gem 'annotate', '~> 2.7.2'     # Model に  Schema Info を自動挿入する gem
end

group :production, :staging do
  # Engineyard Addons

  # New Relic
  gem 'newrelic_rpm', '~> 6.5.0.357'
  gem 'ey_config'

  gem 'unicorn', '~> 5.4.0'
end


# Wercker にて、setup DB で、
# NoMethodError: undefined method `last_comment' for #<Rake::Application:0x00000003044e00> でおちた。
# https://www.oiax.jp/books/rails_kochiku_guide/first_rspec_example_failure.html
gem 'rake', '< 12.0'
