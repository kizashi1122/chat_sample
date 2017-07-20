source 'https://rubygems.org'

#ruby '2.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 4.2.7.1'
# # Use postgresql as the database for Active Record
gem 'pg', '~> 0.21.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 3.2.0'
# Use SCSS for StyleSheets assets
gem 'sass-rails'
# compressorr for HTML (angularjs) Template
gem 'htmlcompressor'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7.0'

# API Support
gem 'grape', '0.19.2'
# JSON Template (with grape)
gem 'rabl', '~> 0.13.0'
# For use Rabl templates in Grape
gem 'grape-rabl', '~> 0.4.2'
# Fast JSON Parser (with rabl)
gem 'oj', '~> 2.18.0'

# Active Record queries with fewer strings
gem 'squeel', '~> 1.2.3'

# Organise ActiveRecord model into a tree structure
gem 'ancestry'

# rails-template をasset-pipelineで管理するためのgem
gem 'angular-rails-templates'

# 定数の一元管理
gem 'settingslogic'

# Uploader
gem 'carrierwave', '~> 0.11.2'
gem 'fog-aws', '~> 1.4.0'         # for aws S3
# gem 'ruby-filemagic'            # ファイルの内容をもとにcontent-typeの判定
# gem 'carrierwave-magic'         # carrierwave との連携用gem

# Authentication
gem 'devise', '~> 4.3.0'

# managed Tenant
gem 'apartment', '~> 0.24.3'

# Aws Sdk
gem 'aws-sdk', '~> 2.10.8'

# ElasticSearch
gem 'elasticsearch-rails', '~> 0.1.9'
gem 'elasticsearch-model', '~> 0.1.9'
gem 'lograge', '~> 0.5.1'

# mail
gem 'mail', '~> 2.6.6'
gem 'mail_address', '~> 1.2.14'

# Exception Notification
gem 'exception_notification', '~> 4.2.1'
gem 'slack-notifier', '~> 2.2.2'

# htmlentities
gem 'htmlentities' # using in wash html

# Twitter
gem 'twitter', '~> 6.1.0'
gem 'twitter-text', '~> 1.14.7'

# Socket.io Emitter (WebSocket)
gem 'redis', '~> 3.3.3'
gem 'socket.io-emitter', '~> 1.0.0'
gem 'msgpack', '~> 0.5.12'

# Firebase (for Chat)
gem 'firebase', '~> 0.2.6'

# Authorize with SNS
gem 'omniauth', '~> 1.6.1'
gem 'omniauth-twitter', '~> 1.4.0'

# Intercom
gem 'intercom-rails', '~> 0.3.5'

# encrypt/decrypt smtp password
gem 'aes'

# background job
# https://github.com/mperham/sidekiq/blob/master/4.0-Upgrade.md
gem 'redis-namespace'
gem 'sidekiq', '~> 4.2.10'

# image processing library
gem 'rmagick', '~> 2.16.0'

gem 'rubyzip', '~> 1.2.1'

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
  gem 'factory_girl_rails', '~> 4.8.0'       # activerecord のモデルの生成
  gem 'json_expressions'         # JSON チェック用のヘルパー
  gem 'database_cleaner', '~> 1.6.1'         # テスト後のデータベースのクリーン
  gem 'spring' # , '~> 2.0.1'                   # テスト高速化
  gem 'spring-commands-rspec'    # guard で spring を呼ぶために必要
  gem 'teaspoon-jasmine', '~> 2.3.4'         # javascript テストランナー


  # OSXの場合のみ、ファイル変更検知のため（それ以外の環境ではポーリングになる）
  #  gem 'rb-fsevent', :require => false if RUBY_PLATFORM =~ /darwin/i

  gem 'capybara', '~> 2.14.4'                 # rails のインテグレーションテスト
  gem 'poltergeist', '~> 1.15.0'              # capybara の js driver を phantom js にする
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
  gem 'pry-rails', '~> 0.3.6'                # rails console で pry を使う
  gem 'pry-byebug', '~> 3.4.2'               # debugger
  gem 'hirb'                     # PryでのSQLの結果を綺麗に表示
  gem 'hirb-unicode'
  gem 'awesome_print', '~> 1.8.0'            # Object表示をキレイに表示

  gem 'annotate', '~> 2.7.2'     # Model に  Schema Info を自動挿入する gem

  # er図生成
  gem 'rails-erd', git: 'https://github.com/paulwittmann/rails-erd', branch: 'mavericks'
end

group :production, :staging do
  # Engineyard Addons

  # New Relic
  gem 'newrelic_rpm', '~> 4.2.0'
  gem 'ey_config'

  gem 'unicorn', '~> 5.3.0'
end


# Wercker にて、setup DB で、
# NoMethodError: undefined method `last_comment' for #<Rake::Application:0x00000003044e00> でおちた。
# https://www.oiax.jp/books/rails_kochiku_guide/first_rspec_example_failure.html
gem 'rake', '< 11.0'
