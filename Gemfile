# -*- coding: utf-8 -*-
source 'https://rubygems.org'

#ruby '2.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 4.2.7.1'
# # Use postgresql as the database for Active Record
gem 'pg'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 2.7.2'
# Use SCSS for StyleSheets assets
gem 'sass-rails', '~> 4.0.3'
# compressorr for HTML (angularjs) Template
gem 'htmlcompressor'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

# API Support
gem 'grape', '~> 0.8.0'
# JSON Template (with grape)
gem 'rabl', '~> 0.10.0'
# For use Rabl templates in Grape
gem 'grape-rabl', '~> 0.2.2'
# Fast JSON Parser (with rabl)
gem 'oj', '~> 2.11.0'

# Active Record queries with fewer strings
gem 'squeel', '~> 1.2.3'

# Organise ActiveRecord model into a tree structure
gem 'ancestry'

# Turbo-charged counter caches
gem 'counter_culture', '~> 0.1.34'

# rails-template をasset-pipelineで管理するためのgem
gem 'angular-rails-templates'

# 定数の一元管理
gem 'settingslogic'

# Uploader
gem 'carrierwave'               # 0.10.0 が build errorになるため、0.9固定にする
gem 'fog'                       # for aws S3
# gem 'ruby-filemagic'            # ファイルの内容をもとにcontent-typeの判定
# gem 'carrierwave-magic'         # carrierwave との連携用gem

# Authentication
gem 'devise', '~> 3.4.0'

# managed Tenant
gem 'apartment', '~> 0.24.3'

# Aws Sdk
gem 'aws-sdk', '~> 1.0'

# ElasticSearch
gem 'elasticsearch-rails'
gem 'elasticsearch-model'
gem 'lograge'

# mail
gem 'mail'
gem 'mail_address', '~> 1.2.13'

# Exception Notification
gem 'exception_notification', '~> 4.2.1'
gem 'slack-notifier', '~> 1.5.1'

# htmlentities
gem 'htmlentities' # using in wash html
# sanitize html
gem 'sanitize'

# Twitter
gem 'twitter'
gem 'twitter-text'

# Socket.io Emitter (WebSocket)
gem 'redis'
gem 'socket.io-emitter', '~> 1.0.0'
gem 'msgpack', '~> 0.5.12'

# Authorize with SNS
gem 'omniauth'
gem 'omniauth-twitter'

# Intercom
gem 'intercom-rails', '~> 0.2.26'

# encrypt/decrypt smtp password
gem 'aes'

# background job
gem 'sidekiq', '3.5.4'

# image processing library
gem 'rmagick'

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


group :development, :test do
  gem 'rspec-rails'              # テストライブラリ
  gem 'factory_girl_rails'       # activerecord のモデルの生成
  gem 'json_expressions'         # JSON チェック用のヘルパー
  gem 'database_cleaner'         # テスト後のデータベースのクリーン
  gem 'spring'                   # テスト高速化
  gem 'spring-commands-rspec'    # guard で spring を呼ぶために必要
  gem 'teaspoon-jasmine'         # javascript テストランナー


  # OSXの場合のみ、ファイル変更検知のため（それ以外の環境ではポーリングになる）
  #  gem 'rb-fsevent', :require => false if RUBY_PLATFORM =~ /darwin/i

  gem 'capybara'                 # rails のインテグレーションテスト
  gem 'poltergeist'              # capybara の js driver を phantom js にする
end

group :development do
  # guard 系
  gem 'guard'                    # ファイル監視
  gem 'guard-livereload'         # livereload
  gem 'guard-rspec'              # テストの自動化
  gem 'guard-coffeescript'       # テスト用コードのコンパイル用
  gem 'guard-rails'              # guard 起動時にrails-serverを起動する
  gem 'guard-rails-assets'       # assetsを自動コンパイル
  # guard で js test 時にエラーが発生するため、最新ソースを取得する
  # https://github.com/modeset/guard-teaspoon/pull/24
  gem 'guard-teaspoon', :git => 'https://github.com/modeset/guard-teaspoon.git'
  #gem "guard-teaspoon"           # javascript テストの自動化

  # ruby error 時の画面でデバッグを可能にする
  gem 'better_errors'
  gem 'binding_of_caller'

  # console 表示
  gem 'pry-rails'                # rails console で pry を使う
  gem 'pry-byebug'               # debugger
  gem 'hirb'                     # PryでのSQLの結果を綺麗に表示
  gem 'hirb-unicode'
  gem 'awesome_print'            # Object表示をキレイに表示

  gem 'annotate', '~> 2.6.5'     # Model に  Schema Info を自動挿入する gem

  # er図生成
  gem 'rails-erd', git: 'https://github.com/paulwittmann/rails-erd', branch: 'mavericks'
end

group :production, :staging do
  # Engineyard Addons

  # New Relic
  gem 'newrelic_rpm'
  gem 'newrelic-grape'
  gem 'ey_config'

  gem 'unicorn'
end
