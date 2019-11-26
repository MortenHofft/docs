---
layout: default
permalink: /
section_id: home
---

# Data pipelines for biodiversity data

<p class="subtitle">Securely accept card payments online.</p>

## Process biodiversity data

Data pipelines provides components to integrate, structure, interpret and transform biodiversity data. Built for extensibility, portability and high performance, data pipelines powers services such as GBIF.org.

<a href="https://gbif-pipelines.netlify.com/images/primary.png"><img alt="Material for MkDocs" src="https://gbif-pipelines.netlify.com/images/primary.png"></a>

{% include image.html url="https://gbif-pipelines.netlify.com/images/primary.png" alt="Alt text goes here" description="Phasellus arcu justo, tempor sed est quis, fermentum venenatis arcu." linkToRaw=true lxinkUrl="https://api.gbif.org/v1/image/unsafe/1170x422/http:%2F%2Fimages.ctfassets.net%2Fuo17ejk9rkwj%2F5IM4nDF7oSReiPBmLQ6Wlx%2Fbe25e206ffc43e6f94b2d2ea3cf8b474%2Fliz.jpg" %}


## Features

Some of the high-level capabilities and objectives of Data pipelines include:

* Support a variety of input formats (Darwin Core, ABCD, CSV files, Excel files, Shapefiles etc) with easy opportunity to include new connectors
* Support batch (e.g. a project CSV) and streaming inout (e.g. append-only tracking data)
* Align data to a standardized vocabularies, supporting multilingual data labelling
* Apply quality controls to flag errors, detect outliers and apply statements about the suitability of the data for a variety of uses (also known as fitness for use indicators)
* Enrich data by:
  * cross referencing with geospatial gazetteers for political boundaries (e.g. GADM.org, EEZ, protected areas) and biogegraphic regions, landuse categorisation and environmental surfaces
  * organizating to multiple taxonomic classifications including the GBIF Backbone taxonomy, Catalogue of Life and national legislative taxonomies such as ITIS
* Allow consumers to easily understand the data preparation and enrichment process that has been applied (i.e. preserve and document data provenance).
* Provide clear documentation for all data transformations
* Support multiple runtime environments such as Apache Spark, Google Dataflow, Amazon EMR or local machine
* Ensure pipelines can be deployed in a high throughput environment. GBIF.org target the processing and indexing into Elasticsearch of 1 Billion records in under 12 hours